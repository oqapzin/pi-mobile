import { useEffect, useState } from "react";
import axiosConnect from "../../services/api/ConsumeAPI";
import { View } from "react-native";
import FullCalendar from '@fullcalendar/react'


function agenda(){
    const[querryEventos, setQueryEventos]= useState([])
    useEffect(() => {
        axiosConnect.get(`/eventos`).then(result => {
            setQueryEventos(result.data.dados)
            console.log(querryEventos)
        })
    }, [])

    const Eventos = []
    querryEventos.map(item => {
      obj = {
        id: item.id,
        title: item.descricaoTipo,
        start: item.dataHoraInicio,
        end: item.dataHoraFim
      };

      Eventos.push(obj)
    })

    return Eventos

    return(
        <View>
            <FullCalendar
            slotLaneClassNames={'bg-warning'}
            eventClassNames={'bg-warning'}
            moreLinkClassNames={'bg-warning'}
            dayHeaderClassNames={'bg-warning'}
            viewClassNames={'bg-light '}
            plugins={[dayGridPlugin,interactionPlugin]}
            initialView="dayGridMonth"
            events={getData()}
            editable={"true"}
            eventTextColor={'rgb(255,0,0)'}
            height="auto"
            locales={"pt-Br"}
            moreLinkContent={"Mais eventos+"}
            dayHeaderFormat={
              { weekday: 'long' }
            }
            views={{
              dayGrid: {
                dayMaxEventRows: 4 
              }
            }}
            headerToolbar={
              {
                start: '',
                center: 'title',
                end: 'today prev,next',
              }
            }
            eventClick={function (info) {
              alert('Você está sendo direcionado para: ' + info.event.title);
            }}
            timeZone='local'

            />
        </View>
    )

}

export default agenda
