import React from 'react'
import '../../styles/recentbases.css'
import plus from '../svgs/plus.svg'

const RecentBases = (props) => {
  return (
    <div className="RecentBases">
      <div className="row margin-top">
        <div className="col-md-6">
          <h4>New Base</h4>
          <div className="row recents-display-flex">
            <div className="col-md-12">
              <button type="button" class="btn btn-outline-dark new-base-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Recent Bases</h4>
        </div>
      </div>
    </div>
  )
}

export default RecentBases