import { IStorageService } from '../../service/storage/IStorageService';
import { AsyncStorageService } from '../../service/storage/AsyncStorageService';
import * as React from 'react';
import MenuPage from '../menu/MenuPage';
import { RootState } from '../../reducers';
import { connect } from 'react-redux';
import { saveCv } from '../../actions/cvDataActions';
import Button from '@material-ui/core/Button';

class ImportExport extends React.Component<any, any> {
    constructor(props: Readonly<any>) {
        super(props);
    }

    async componentDidMount(): Promise<void> {
        const { dispatch } = this.props;
    }

    render(): React.ReactNode {
        return (
            <MenuPage>
                <div style={{ flex: 1 }}></div>
                <div style={{ flex: 10, display: "flex", justifyContent: "center" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small">
                        Export
                    </Button>
                </div>
                <div style={{ flex: 1 }}></div>
            </MenuPage>
        );
    }
}

function mapStateToProps(state: RootState): any {
    return {
        data: undefined,
    };
}

export default connect(mapStateToProps)(ImportExport);
