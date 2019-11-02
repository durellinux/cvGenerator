import { IStorageService } from '../../service/storage/IStorageService';
import { AsyncStorageService } from '../../service/storage/AsyncStorageService';
import * as React from 'react';
import MenuPage from '../menu/MenuPage';
import { RootState } from '../../reducers';
import { connect } from 'react-redux';
import { saveCv } from '../../actions/cvDataActions';
import CvEditorRedux from './CvEditorRedux';

class CvEditorReduxContainer extends React.Component<any, any> {
    private storage: IStorageService;

    constructor(props: Readonly<any>) {
        super(props);
        this.storage = new AsyncStorageService();
    }

    async componentDidMount(): Promise<void> {
        const {dispatch} = this.props;
        const cvData = await this.storage.load();
        dispatch(saveCv(cvData));
        console.log(cvData);
    }

    render(): React.ReactNode {
        return (
            <MenuPage>
                <CvEditorRedux />
            </MenuPage>
        );
    }
}

function mapStateToProps(state: RootState): any {
    return {
        data: undefined,
    };
}

export default connect(mapStateToProps)(CvEditorReduxContainer);
