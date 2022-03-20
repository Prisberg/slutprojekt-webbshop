import { Component } from 'react';
import ProductInfo from './ProductInfo';

interface Props {}
interface State {}
export default class DetailedView extends Component<Props, State> {
    render() {
        return (
            <div>
                {/* <ProductContainer /> */}
                <ProductInfo />
            </div>
        );
    }
}