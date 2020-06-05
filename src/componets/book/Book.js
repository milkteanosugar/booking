import React,{useState} from "react";
import { withRouter } from 'react-router';
import Navbar from '../navbar';

import { Calendar,Table, Select } from 'antd';
import hours from './hours.js';
import roomData from './room.js';

//get date avaiable
const { Option } = Select;
const buildingData = Object.keys(roomData)
console.log(buildingData)

class Selections extends React.Component{
    state = {
        buildings:roomData[buildingData[0]],
        rooms:roomData[buildingData[0]][0],
    }

  handleBuildingChange = value => {
    this.setState({
      buildings: roomData[value],
      rooms: roomData[value][0],
    });
  };

  onRoomChange = value => {
    this.setState({
      rooms: value,
    });
  };

  render() {
    const { buildings } = this.state;
    return (
      <>
        <Select
          defaultValue={buildingData[0]}
          style={{ width: 120 }}
          onChange={this.handleBuildingChange}
        >
          {buildingData.map(building => (
            <Option key={building}>{building}</Option>
          ))}
        </Select>
        <Select
          style={{ width: 120 }}
          value={this.state.rooms}
          onChange={this.onRoomChange}
        >
          {buildings.map(room => (
            <Option key={room}>{room}</Option>
          ))}
        </Select>
      </>
    );
  }

}


//get daily seat avaialbe
const columns = [
  {
    title: 'Hour',
    dataIndex: 'Hour',
  },
  {
    title: 'Available',
    dataIndex: 'Available',
  },

];


const rowSelection = {
  onChange: (selectedRowHours, selectedRows) => {
    console.log(`selectedRowHours: ${selectedRowHours}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.Available === 0, // Column configuration not to be checked
    name: record.name,
  }),
};

const Demo = () => {
  const [selectionType, setSelectionType] = useState('checkbox');

  return (
    <div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        pagination={false}
        columns={columns}
        dataSource={hours}
      />
    </div>
  );
};

function onPanelChange(value, mode) {
  console.log(value, mode);
}

class Booknew extends React.Component {
  render() {
    return (
    <div>
      <Navbar/>

      <div >
          <div style={{float:'left'}}>
            <Selections/>
              <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 ,}}>

                <Calendar
                fullscreen={false}
                onPanelChange={onPanelChange}
                disable date
                />
              </div>,
          </div>
          <div style={{float:'left'}}>
            <Demo/>
          </div>
      </div>
    </div>
    );
  }
}


export default withRouter(Booknew);