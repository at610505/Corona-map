function updateMap()
{
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.data);
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude; 
            cases = element.infected;
            if (cases>1000) {
                color=`rgb(255,0,0)`;
            }
            else if(cases<1000 && cases>700){
                color =`rgb(255, 51, 0)`;
            }
            else if(cases<700 && cases>500){
                color =`rgb(255, 80, 80)`;
            }
            else if(cases<500 && cases>300){
                color =`rgb(255, 102, 0)`;
            }
            else if(cases<300 && cases>100){
                color =`rgb(255, 204, 0)`;
            }
            else if(cases<100){
                color =`rgb(153, 204, 0)`;
            }

            // Mark on the map
            new mapboxgl.Marker({
                draggable: false,
                color : color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}
updateMap();