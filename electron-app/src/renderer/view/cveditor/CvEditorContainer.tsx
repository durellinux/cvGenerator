import { CvData, cvEmpty } from '../../model/CvData';
import * as React from 'react';
import { IStorageService } from '../../service/storage/IStorageService';
import { AsyncStorageService } from '../../service/storage/AsyncStorageService';
import { ReactNode } from 'react';
import { CvEditor } from './CvEditor';
import MenuPage from '../menu/MenuPage';

export class CvEditorContainer extends React.Component<any, CvData> {
    private storage: IStorageService;

    constructor(props: Readonly<void>) {
        super(props);
        this.state = cvEmpty;
        this.storage = new AsyncStorageService();
    }

    async componentDidMount(): Promise<void> {
        const cvData = await this.storage.load();
        this.setState(cvData);
    }

    update: (data: CvData) => void = (data: CvData) => {
        this.storage.store(data).then(() => this.setState(data)).catch((e) => alert(`Error storing data: ${e}`));
    };

    render(): ReactNode {
        return (
            <MenuPage>
                <CvEditor
                    data={this.state}
                    update={this.update}
                    expanded={false}
                />
            </MenuPage>
        );
    }
}
