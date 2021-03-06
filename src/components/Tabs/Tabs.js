import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

export default class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    };

    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    };

    tabClick = (tab) => {
        this.setState({ activeTab: tab })
    };

    render() {
        const { tabClick, props: { children, }, state: { activeTab, } } = this;

        return (
            <div className='tabs'>
                <div className='tab-content'>
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
                <ol className='tab-list'>
                    {children.map((child) => {
                        const { label } = child.props;
                        return (
                            <Tab activeTab={activeTab} key={label} label={label} onClick={tabClick} />
                        );
                    })};
                </ol>
            </div>
        );
    };
};