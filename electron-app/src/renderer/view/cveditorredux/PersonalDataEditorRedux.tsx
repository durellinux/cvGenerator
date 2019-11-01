import { CvData, PersonalData } from '../../model/CvData';
import * as React from 'react';
import { RootState } from '../../reducers';
import { connect } from 'react-redux';
import { IEditorReduxProps, ReduxDataProps } from './IEditorProps';
import { ReactNode } from 'react';
import { ExpansionPanelDetails, TextField } from '@material-ui/core';
import { handleFormChange } from '../../util/FormUtils';
import { savePersonal } from '../../actions/cvDataActions';

class PersonalDataEditorRedux extends React.Component<IEditorReduxProps<PersonalData>, any> {

    render(): ReactNode {
        const {data, dispatch} = this.props;
        return (
            <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                <TextField
                    id="name"
                    label="Name"
                    value={data.name}
                    onChange={handleFormChange(data, "name", (v) => dispatch(savePersonal(v)))}
                    margin="normal"
                />
                <TextField
                    id="surname"
                    label="Surname"
                    value={data.surname}
                    onChange={handleFormChange(data, "surname", (v) => dispatch(savePersonal(v)))}
                    margin="normal"
                />
                <TextField
                    id="address"
                    label="Address"
                    value={data.address}
                    onChange={handleFormChange(data, "address", (v) => dispatch(savePersonal(v)))}
                    margin="normal"
                />
                <TextField
                    id="city"
                    label="City"
                    value={data.city}
                    onChange={handleFormChange(data, "city", (v) => dispatch(savePersonal(v)))}
                    margin="normal"
                />
                <TextField
                    id="zipCode"
                    label="Zip Code"
                    value={data.cap}
                    onChange={handleFormChange(data, "cap", (v) => dispatch(savePersonal(v)))}
                    margin="normal"
                />
                <TextField
                    id="country"
                    label="Country"
                    value={data.country}
                    onChange={handleFormChange(data, "country", (v) => dispatch(savePersonal(v)))}
                    margin="normal"
                />
                <TextField
                    id="email"
                    label="Email"
                    value={data.email}
                    onChange={handleFormChange(data, "email", (v) => dispatch(savePersonal(v)))}
                    margin="normal"
                />
                <TextField
                    id="website"
                    label="Website"
                    value={data.website}
                    onChange={handleFormChange(data, "website", (v) => dispatch(savePersonal(v)))}
                    margin="normal"
                />
            </ExpansionPanelDetails>
        );
    }
}


function mapStateToProps(state: RootState): ReduxDataProps<PersonalData> {
    return {
        data: state.cvData.personal
    };
}

export default connect(mapStateToProps)(PersonalDataEditorRedux);
