import { IStorageService } from '../../service/storage/IStorageService';
import { CvData, cvEmpty } from '../../model/CvData';
import { AsyncStorageService } from '../../service/storage/AsyncStorageService';
import { ReactNode } from 'react';
import * as React from 'react';
import MenuPage from '../menu/MenuPage';
import { RootState } from '../../reducers';
import { connect } from 'react-redux';
import { DispatchProps } from '../../commons/DispatchProps';
import { saveCv } from '../../actions/cvDataActions';
import CvEditorRedux from './CvEditorRedux';

class CvEditorReduxContainer extends React.Component<DispatchProps<RootState>, any> {
    private storage: IStorageService;

    constructor(props: Readonly<DispatchProps<RootState>>) {
        super(props);
        this.storage = new AsyncStorageService();
    }

    async componentDidMount(): Promise<void> {
        const {dispatch} = this.props;
        const cvData = await this.storage.load();
        dispatch(saveCv(cvData));
    }

    update: (data: CvData) => void = (data: CvData) => {
        this.storage.store(data).catch((e) => alert(`Error storing data: ${e}`));
    };

    render(): ReactNode {
        return (
            <MenuPage>
                <CvEditorRedux
                    expanded={true}
                />
            </MenuPage>
        );
    }
}

function mapStateToProps(state: RootState): any {
    return {};
}

export default connect(mapStateToProps)(CvEditorReduxContainer);
