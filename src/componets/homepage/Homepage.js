import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Scheduler from 'devextreme-react/scheduler';
import Button from 'devextreme-react/button';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import data from './data.js';
import Book from '../book/Book';
import Navbar from '../navbar';

const currentDate = new Date(2020, 6, 2);
const views = ['week', 'month'];


class Homepage extends Component {

    onAppointmentDblClick(e) {
        e.cancel = true;
    }

    onAppointmentClick(e) {
        console.log(e.event.view)
        e.event.view = null;
    }

    deleteAppointment() {
        this.scheduler.deleteAppointment(this.appointments[0]);
    }

    onAppointmentFormOpening(data) {
        let form = data.form,
          startDate = data.appointmentData.startDate;

        form.option('items', [ {
          dataField: 'Try',
          editorType: 'dxRadioGroup',
          editorOptions: {
            dataSource: [1, 2, 3, 4],
            itemTemplate: function(itemData) {
              return `${itemData}`;
            }
          }
        }
        ]);
    }


    render() {
    return (
    <div>
        <Navbar/>
        <React.Fragment>

        <Scheduler
            dataSource={data}
            views={views}
            defaultCurrentView="week"

            defaultCurrentDate={currentDate}
            height={700}
            startDayHour={9}
            endDayHour={23}
            showAllDayPanel={false}
            editing={{ allowAdding: false }}
//            onAppointmentClick={this.onAppointmentClick}
//            onAppointmentDblClick={this.onAppointmentDblClick}
            onAppointmentFormOpening={this.onAppointmentFormOpening}
        />
        </React.Fragment>
    </div>
    );
  }
}

export default withRouter(Homepage);
