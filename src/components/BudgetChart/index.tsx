import React, {useEffect} from 'react';
import * as echarts from 'echarts';

const BudgetChart = () => {
    useEffect(() => {
        echarts.init(document.querySelector('#budgetChart') as HTMLElement).setOption({
            legend: {
                data: ['Allocated Budget', 'Actual Spending']
            },
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: 'Sales', max: 6500 },
                    { name: 'Administration', max: 16000 },
                    { name: 'Information Technology', max: 30000 },
                    { name: 'Customer Support', max: 38000 },
                    { name: 'Development', max: 52000 },
                    { name: 'Marketing', max: 25000 }
                ]
            },
            series: [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: 'Allocated Budget'
                        },
                        {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: 'Actual Spending'
                        },
                    ]
                }
            ]
        });
    }, []);

    return (
        // eChart 사용 시 크기를 미리 지정하지 않으면 렌더링이 안되는 문제점이 있다.
        <div id="budgetChart"
             style={{ width: '400px', height: '400px', maxHeight: '400px' }}
             className="echart"
        >
        </div>
    );
};

export default BudgetChart;