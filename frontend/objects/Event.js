class Event{
    constructor(id, date_time, description, event_type, location, ticket_price, title){
        this._id = id;
        this.date_time = this.handleDate_Time(date_time);
        this.description = description;
        this.event_type = event_type;
        this.location = this.handleLocation(location);
        this.ticket_price = this.handleTickets(ticket_price);
        this.title = title;
    };

    handleDate_Time(date_time){
        let dateTimetoString = date_time.toDate().toString();
        let dateTimeStrSplit = dateTimetoString.split(" ");
        let newDate = `${dateTimeStrSplit[0]} ${dateTimeStrSplit[1]} ${dateTimeStrSplit[2]}`;

        let timeStrSplit = dateTimeStrSplit[4].split(":");
        let formatTime = parseInt(timeStrSplit[0]);

        if (formatTime > 12){
            formatTime -= 12;
            return `${newDate} at ${formatTime.toString()}:${timeStrSplit[1]} PM`;
        } else {
            return `${newDate} at ${formatTime.toString()}:${timeStrSplit[1]} AM`;
        }
    };

    handleLocation(location){
        if (location.latitude > 0){
            if (location.longitude >= 0){
                return `${(location.latitude).toString()} N, ${(location.longitude).toString()} E`;
            } else {
                return `${(location.latitude).toString()} N, ${(Math.abs(location.longitude)).toString()} W`;
            }
        } else {
            if (location.longitude >= 0){
                return `${(Math.abs(location.latitude)).toString()} S, ${(location.longitude).toString()} E`;
            } else {
                return `${(Math.abs(location.latitude)).toString()} S, ${(Math.abs(location.longitude)).toString()} W`;
            }
        }
    };

    handleTickets(ticket_price){
        if (ticket_price == 0){
            return "Free";
        } else {
            return `$${ticket_price.toString()}`;
        }
    };
};

export default Event;