import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {getExpenses} from '../../api/api.js';

const expensesDetail = {
  labels: ['January', 'February', 'March',
           'April'],
  datasets: [
    {
      label: 'Expenses',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350'
      ],
      data: [20, 10, 30, 50]
    }
  ]
}

const Pie = () => {
    const [stateExpenses, setStateExpenses] = React.useState([]);
    const [expenseData, setExpenseData] = React.useState(expensesDetail);

    React.useEffect(()=>{
      var value = dataGetExpenses();
      console.log("P", stateExpenses)
      // destructureUpdate()
      
    },[])
    console.log(stateExpenses)

      expensesDetail.labels[0]=stateExpenses.category1;
      expensesDetail.labels[1]=stateExpenses.category2;
      expensesDetail.labels[2]=stateExpenses.category3;
      expensesDetail.labels[3]=stateExpenses.category4;

      expensesDetail.datasets[0].data[0]=stateExpenses.value1;
      expensesDetail.datasets[0].data[1]=stateExpenses.value2;
      expensesDetail.datasets[0].data[2]=stateExpenses.value3;
      expensesDetail.datasets[0].data[3]=stateExpenses.value4;

    function dataGetExpenses(){
      return getExpenses().then((res)=>setStateExpenses(res.data));
    }
    // function destructureUpdate(){
    //   const {category1, category2, category3, category4} = stateExpenses;
    //   console.log(category1);
    //   let arr_name = [];
    // }

    return (
      <div style={{height: "800px", width: "800px", margin: "3% auto"}}>
        <h1 style={{fontSize: "27px", textAlign: "center", fontFamily: "Lato, sans-serif", paddingRight: "14%",  fontWeight: "500"}}>Expenses Chart</h1>
        <Doughnut
          data={expensesDetail}
          options={{
            title:{
              display:true,
              text:'',
              fontSize:25
            },
            legend:{
              display:true,
              position:'right',
              height: 200,
              width: 200
            }
          }}
        />
      </div>
    );
}

export {Pie}