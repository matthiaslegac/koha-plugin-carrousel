function add_bar_chart(a,t,r,s,e){for(var o=[],h=[],l=0;l<=255;l+=1/r.length)h.push(hsva_to_rgba_str(l,bg_satur,bg_light,bg_alpha)),o.push(hsva_to_rgba_str(l,bo_satur,bo_light,bo_alpha));graphs.push(new Chart(a,{type:"bar",data:{labels:r,datasets:[{label:s,data:e[0],backgroundColor:h,borderColor:o,borderWidth:1}]},responsive:!0,options:{title:{display:!0,text:t},legend:{display:!1},scales:{yAxis:[{stacked:!1,ticks:{beginAtZero:!0}}]}}}))}function add_stacked_bar_chart(a,t,r,s,e){for(var o=[],h=0,l=0;l<e.length;h+=1/e.length,l++){for(var b=[],_=[],g=0;g<e[l].length;g++)b.push(hsva_to_rgba_str(h,bg_satur,bg_light,bg_alpha)),_.push(hsva_to_rgba_str(h,bo_satur,bo_light,bo_alpha));o.push({label:s[l],data:e[l],backgroundColor:b,borderColor:_,borderWidth:1}),console.log(l)}console.log(o),graphs.push(new Chart(a,{type:"bar",data:{labels:r,datasets:o},responsive:!0,options:{title:{display:!0,text:t},legend:{display:!0},scales:{yAxes:[{stacked:!0}],xAxes:[{stacked:!0}]}}}))}function add_pie_chart(a,t,r,s){for(var e=[],o=[],h=0;h<=255;h+=1/r.length)o.push(hsva_to_rgba_str(h,bg_satur,bg_light,bg_alpha)),e.push(hsva_to_rgba_str(h,bo_satur,bo_light,bo_alpha));graphs.push(new Chart(a,{type:"pie",data:{labels:r,datasets:[{label:"",data:s[0],backgroundColor:o,borderColor:e,borderWidth:1}]},responsive:!0,options:{title:{display:!0,text:t},legend:{display:!0,position:"right"}}}))}function hsva_to_rgba_str(a,t,r,s){var e,o,h,l,b,_,g,d;switch(1===arguments.length&&(t=a.s,r=a.v,a=a.h),l=Math.floor(6*a),b=6*a-l,_=r*(1-t),g=r*(1-b*t),d=r*(1-(1-b)*t),l%6){case 0:e=r,o=d,h=_;break;case 1:e=g,o=r,h=_;break;case 2:e=_,o=r,h=d;break;case 3:e=_,o=g,h=r;break;case 4:e=d,o=_,h=r;break;case 5:e=r,o=_,h=g}return"rgba("+Math.round(255*e)+", "+Math.round(255*o)+", "+Math.round(255*h)+", "+s+")"}var graphs=[],bg_satur=.6,bg_light=1,bg_alpha=1,bo_satur=.6,bo_light=1,bo_alpha=1;