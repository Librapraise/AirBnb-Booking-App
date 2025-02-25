import { useContext, useState } from "react";
import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/searchContext";
import axios from "axios";

export const Reserve = ({setOpen, hotelId}) => {

    const [selectedRoom, setSelectedRoom] = useState([]);
    const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
    const { dates } = useContext(SearchContext);

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());

        let list = [];

        while (data <= end) {
            dates.push(new Date(date).getTime());
            data.setDate(date.getDate() + 1);
        }
    }

    const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);
    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some(date => 
            allDates.includes(new Date(date).getTime())
        );

        return !isFound;
    }

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRoom(checked ? [...selectedRoom, value] : selectedRoom.filter(item => item !== value));
    }

    const handleClick = async () => {
        try {
            await Promise.all(selectedRoom.map(roomId => {
                const res = axios.put(`/rooms/availability/${roomId}`, {dates: allDates}); 
                return res.data;
            }));
            setOpen(false)
        } catch (error) {
            
        }
    };


  return (
        <div className="reserveContainer">
            <div className="reserveWrapper">
                <button className="reserveClose" onClick={() => setOpen(false)}>x</button>
                {data.map((item, i) => (
                    <div className="reserveItem" key={item._id}>
                        <div className="reserveItemInfo">
                            <span className="reserveItemTitle">{item.title}</span>
                            <span className="reserveItemDesc">{item.desc}</span>
                            <span className="reserveItemMax">Max guest: {item.maxGuest}</span>
                            <span className="reserveItemPrice">Price: ${item.price}</span>
                            <div className="reserveSelected">
                                {item.roomNumbers.map(roomNumber => (
                                    <div className="reserveItemNo">
                                        <label>{roomNumber.number}</label>
                                        <input type="checkbox" 
                                            value={roomNumber._id} 
                                            onChange={handleSelect}
                                            disabled={!isAvailable(roomNumber)}
                                            />
                                    </div>
                                ))}
                            </div>
                            <span className="reserveItemText">Available: {item.available ? "Yes" : "No"}</span>
                        </div>
                    </div>
                ))}

                <button className="reserveButton" onClick={handleClick}>Reserve Now!</button>
            </div>
        </div>
  )
}
