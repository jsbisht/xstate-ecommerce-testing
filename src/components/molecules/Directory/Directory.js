import React from 'react'
import MenuItem from '../MenuItem';
import "./Directory.scss";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../../redux/directory/directory.selectors';

const Directory = ({ sections }) => {

        return (
            <div className="directory-menu">
                {
                    sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)