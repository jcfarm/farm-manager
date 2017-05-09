import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';

import {Tabs, Tab} from 'material-ui/Tabs';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const FieldAdd = () => {

  const styles = {
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };

  return (
    <PageBase title="新增田地"
              navigation="智慧大棚 / 新增田地">
      <form>

        <TextField
          hintText="Name"
          floatingLabelText="名字"
          fullWidth={true}
        />

        <SelectField
          floatingLabelText="城市"
          value=""
          fullWidth={true}>
          <MenuItem key={0} primaryText="London"/>
          <MenuItem key={1} primaryText="Paris"/>
          <MenuItem key={2} primaryText="Rome"/>
        </SelectField>

        <DatePicker
          hintText="Expiration Date"
          floatingLabelText="选择时间"
          fullWidth={true}/>

        <Divider/>

        <Tabs>
          <Tab label="传感器" >
            <br/>
            <div>
              <FloatingActionButton mini={true}>
                <ContentAdd />
              </FloatingActionButton>
            </div>
          </Tab>
          <Tab label="控制器" >
            <div>
              <h2 style={styles.headline}>Tab Two</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab label="监控器" >
            <div>
              <h2 style={styles.headline}>Tab Three</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
        </Tabs>

        <div style={styles.buttons}>
          <Link to="/fields/">
            <RaisedButton label="返回"/>
          </Link>

          <RaisedButton label="保存"
                        style={styles.saveButton}
                        type="submit"
                        primary={true}/>
        </div>
      </form>
    </PageBase>
  );
};

export default FieldAdd;
