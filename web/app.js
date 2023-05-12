const API_URL = 'https://magenta-melomakarona-93c68a.netlify.app';

$("#navbar-placeholder").load("navbar.html");

$.get(`${API_URL}/light`)
    .then(response => {
        response.forEach(lights => {
            $('#ltbody').append(`
				<tr>
				    <td>${lights.deviceName}</td>
					<td>${lights.state}</td>
					<td style="background:${lights.color}">${lights.color}</td>
				</tr>`
            );
        });
    })

$.get(`${API_URL}/ac`)
    .then(response => {
        response.forEach(acs => {
            $('#actbody').append(`
				<tr>
                    <td>${acs.deviceName}</td>
                    <td>${acs.temperature}&deg;F</td>
                    <td>${acs.fanSpeed}</td>
                    <td>${acs.mode}</td>   
				</tr>`
            );
        });
    })
$.get(`${API_URL}/security`)
    .then(response => {
        response.forEach(sec => {
            $('#sectbody').append(`
				<tr>
                    <td>${sec.deviceName}</td>
                    <td>${sec.lockState}</td>
                    <td>${sec.alarmState}</td> 
				</tr>`
            );
        });
    })

$('#slight').on('click', (event)=>{
    event.preventDefault();
    const deviceName = $('#deviceName').val();
    const state = $('#state').val();
    const color = $('#color').val();
    const body={
        deviceName,
        state,
        color
    }
    console.log(deviceName, state, color);
    $.post(`${API_URL}/light`,body)
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
    window.location.href='/light';
 })

$('#sac').on('click', (event)=>{
    event.preventDefault();
    const deviceName = $('#deviceName').val();
    const temperature = $('#temp').val();
    const fanSpeed = $('#fanSpeed').val();
    const mode = $('#mode').val();
    const body={
        deviceName,
        temperature,
        fanSpeed,
        mode
    }
    console.log(body);
    $.post(`${API_URL}/ac`,body)
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
    window.location.href='/ac';
 })

$('#ssec').on('click', (event)=>{
    event.preventDefault();
    const deviceName = $('#deviceName').val();
    const lockState = $('#lockState').val();
    const alarmState = $('#alarmState').val();
    const body={
        deviceName,
        lockState,
        alarmState
    }
    console.log(body);
    $.post(`${API_URL}/security`,body)
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
    window.location.href='/security';
 })
