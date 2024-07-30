export function totalPhoneBill(data) {
    var calls = 0;
    var sms = 0;
  
    var items = data.split(', ');
    
  for (var i = 0; i < items.length; i++) {
    if (items[i] === 'call') {
      calls++;
    } else if (items[i] === 'sms') {
              sms++;
    }
  }
    
   var total = (calls * 2.75) + (sms * 0.65);
    return 'R' + total.toFixed(2); 
  }
  