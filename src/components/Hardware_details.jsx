import React from 'react'
import Hardware_sol from './Hardware_sol';
import "./Hardware_details.css"

function Hardware_details() {
    let data=[{img_url:"https://media.istockphoto.com/id/1168005805/photo/cctv-car-camera-for-safety-on-the-road.webp?a=1&b=1&s=612x612&w=0&k=20&c=iiBoTxFmz-bsWHAJBjgAuz3uF08r0-KNICGNXCba8MU=",
    heading:"BACK CAM SUPERWIDE",
    para:"Diagnose and repair issues related to the Super Wide rear camera. Covers power supply, signal lines, and hardware troubleshooting."
},
{img_url:"https://images.unsplash.com/photo-1598469701566-59655353deb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QkFDSyUyMENBTSUyMFRFTEVQSE9UT3xlbnwwfHwwfHx8MA%3D%3D",
    heading:"BACK CAM TELEPHOTO",
    para:"Complete solution for Telephoto rear camera faults. Includes circuit analysis and component-level repair guidance."
},
{img_url:"https://plus.unsplash.com/premium_photo-1749059286864-d6689c1f0f4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QkFDSyUyMENBTSUyMHdpZGV8ZW58MHx8MHx8fDA%3D",
    heading:"BACK CAM WIDE",
    para:"Troubleshoot Wide rear camera problems such as no image, blur, or camera failure. Hardware checks with testing points included."
},
{img_url:"https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2lyY3VpdHxlbnwwfHwwfHx8MA%3D%3D",
    heading:"BB CIRCUIT",
    para:"Detailed Baseband (BB) circuit analysis for communication-related issues. Helps identify signal path and faulty components."

},{img_url:"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcmdlciUyMGRhdGF8ZW58MHx8MHx8fDA%3D",
    heading:"CHARGER DATA",
    para:"Covers charging and USB data transfer problems. Includes charging IC, connector, and data line troubleshooting."
},
{img_url:"https://plus.unsplash.com/premium_photo-1661960643553-ccfbf7d921f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWNhbCUyMHJlcGFpcmluZyUyMGl0ZW18ZW58MHx8MHx8fDA%3D",
    heading:"COMP NAME(swap board)",
    para:"Lists component names and locations for board swapping. Makes identification easier during motherboard replacement."
},
{img_url:"https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3RyaWNhbCUyMHJlcGFpcmluZyUyMGl0ZW18ZW58MHx8MHx8fDA%3D",
    heading:"COMP NAME",
    para:"Complete reference of motherboard component names and positions. Helps technicians quickly locate hardware components."
}
,{img_url:"https://images.unsplash.com/photo-1652715648725-c84d5035e9a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVsZWN0cmljYWwlMjByZXBhaXJpbmclMjBpdGVtfGVufDB8fDB8fHww",
    heading:"FORCE DFU",
    para:"Guide to forcing the device into DFU (Device Firmware Update) mode. Useful for software recovery and hardware diagnostics."
},
{img_url:"https://images.unsplash.com/photo-1765959106936-851735565c12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvbnQlMjBjYW18ZW58MHx8MHx8fDA%3D",
    heading:"FRONT CAM",
    para:"Diagnose and repair front camera issues including black screen and camera not detected. Includes circuit and voltage checks."
},
{img_url:"https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXAlMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
    heading:"FRONT CAM IP",
    para:"Solutions for Front IR camera faults affecting Face ID or IR sensing. Covers component testing and repair procedures."
},
{img_url:"https://plus.unsplash.com/premium_photo-1681488121831-a82d558a77e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGNkfGVufDB8fDB8fHww",
    heading:"LCD",
    para:"Complete LCD display troubleshooting guide. Resolves display, touch, backlight, and screen-related hardware issues."
}
,{img_url:"https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWljJTIwc3BlYWtlciUyMGVhcnBob25lfGVufDB8fDB8fHww",
    heading:"MIC SPK EAR",
    para:"Diagnose microphone, speaker, and earpiece problems. Includes audio circuit testing and component replacement guidance."
},
{img_url:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D",
    heading:"NETWORK",
    para:"Hardware solutions for network and signal issues. Covers RF circuits, antennas, and connectivity troubleshooting."
},
{img_url:"https://images.unsplash.com/photo-1624471819298-f7e2b4cc55fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b24lMjBvZmZ8ZW58MHx8MHx8fDA%3D",
    heading:"ON OFF",
    para:"Repair guide for Power and Volume button faults. Includes switch circuits, flex cable, and voltage testing."
}
,{img_url:"https://images.unsplash.com/photo-1562774555-079298a31cbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2ltJTIwY2FyZHxlbnwwfHwwfHx8MA%3D%3D",
    heading:"SIM CARD",
    para:"Troubleshoot SIM detection and network registration issues. Covers SIM slot, filters, and signal path analysis."
},
{img_url:"https://images.unsplash.com/photo-1650420790860-429e356f3194?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlc3QlMjBwb2ludHxlbnwwfHwwfHx8MA%3D%3D",
    heading:"TEST POINT RFFE",
    para:"Reference for RF Front-End (RFFE) test points. Helps technicians measure voltages and diagnose RF hardware faults."
}
,{img_url:"https://plus.unsplash.com/premium_photo-1671305004191-e7e9559a96f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG91Y2glMjBzY3JlZW58ZW58MHx8MHx8fDA%3D",
    heading:"TOUCH SCREEN ",
    para:"Diagnose touchscreen responsiveness and touch failure issues. Includes touch IC, connector, and circuit troubleshooting."
},
{img_url:"https://plus.unsplash.com/premium_photo-1687558345854-a07ac0be8cd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lmaSUyMGJ0JTIwZ3BzfGVufDB8fDB8fHww",
    heading:"WIFI BT GPS",
    para:"Hardware repair guide for Wi-Fi, Bluetooth, and GPS connectivity problems. Covers antenna circuits, ICs, and signal testing."
}
];
  return (
    <div>
           <div  className='Hardware-details'>
      {data.map((item , index)=>( 
        <Hardware_sol key={index} img_url= {item.img_url} heading = {item.heading} para= {item.para}/>
      ))}
    </div>
    </div>
  )
}

export default Hardware_details