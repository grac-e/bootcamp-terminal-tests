export function mostProfitableDepartment (salesData) {
    const salesDataMap = {};
    
    for (let i=0; i<salesData.length; i++) {
      const item = salesData[i];
      if (salesDataMap[item.department] === undefined) {
      salesDataMap[item.department] = 0;
      }
    }
    
    for (let i=0; i<salesData.length; i++) {
      const item = salesData[i];
      salesDataMap[item.department] += item.sales;
    }
    
    var maxSales = 0;
    var profitableDepartment = '';
    
    for (const department in salesDataMap) {
      if ( salesDataMap[department] > maxSales) {
        maxSales = salesDataMap[department];
        profitableDepartment = department;
      }
    }
    return profitableDepartment;
  } 