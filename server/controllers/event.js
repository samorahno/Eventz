const Event = require('../models').Event;
const {validateToken} = require("../utils/ValidateUser")

module.exports = {
    create(req, res){
        const {name, description, event_date} = req.body;
        return Event
            .create({
                name, 
                description,
                event_date,
                owner: null
            })
            .then(event => res.status(201).json(event))
            .catch(error => res.status(400).json(error));
        
    },
    list(req, res){
        return Event
            .all()
            .then(events => res.status(200).send(events))
            .catch(error => res.status(400).send(error));
    },
    detail(req, res){
        const {eventId} = req.params;
        Event.findbypk(eventId).then(event =>{
            if (!event) {
                return res.status(404).send({
                  message: 'Event Not Found',
                });
              }
            return res.status(200).json({event})
        }).catch(error => {
            return res.status(500).json({error})
        })
    },
    delete(req, res){
        return Event
            .findById(req.params.eventId)
            .then(event => {
            if (!event) {
                return res.status(400).send({
                message: 'Event Not Found',
                });
            }
            return event
                .destroy()
                .then(() => res.status(204).json({message: "Event deleted successfully"}))
                .catch(error => res.status(400).json({error}));
            })
            .catch(error => res.status(400).json({error}));
        
    }
}