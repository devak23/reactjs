import React from "react";
import Props from "prop-types";

const Channel = ({name, isSelected, onClick}) => {

    const selectedClassName = isSelected ? 'ChannelList-item ChannelList-item-selected' : 'ChannelList-item';
    return (
        <div onClick={onClick} className={selectedClassName}>{name}</div>
    )
};

const ChannelList = ({channels, selectedChannel, onSelect}) => (
    <div className="ChannelList">
        {channels.map(({id, name}) => {
            const is_selected = selectedChannel === id;
            const onChannelSelect = () => onSelect(id);
            return <Channel  onClick={onChannelSelect} key={id} name={name} isSelected={is_selected}/>
        })}
    </div>
);

ChannelList.propTypes = {
    channels: Props.array.isRequired,
    selectedChannel: Props.number.isRequired,
    onSelect: Props.func.isRequired
};

ChannelList.defaultProps = {
    channels: [],
    selectedChannel: -1,
    onSelect: () => {}
};

export default ChannelList;