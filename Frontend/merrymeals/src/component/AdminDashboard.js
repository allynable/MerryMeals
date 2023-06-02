import React from "react";
import '../css/AdminDashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import MemberTable from './MemberTable';

const AdminDashboard = () => {

  return (
    <div>
          <div class="container-fluid">
        <div class="row">
            <div class="col-3 sidebar">
                {/* <!-- Sidebar menu --> */}
                <ul class="nav flex-column nav-pills" id="v-pills-tab" role="tablist">
                    <li class="nav-item">
                        <h4 class="mt-4">Admin Dashboard</h4>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" id="member-management-tab" data-bs-toggle="pill" href="#member-management" role="tab" aria-controls="v-pills-member" aria-selected="true">Member Management</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="volunteer-management-tab" data-bs-toggle="pill" href="#volunteer-management" role="tab" aria-controls="v-pills-volunteer" aria-selected="false">Volunteer Management</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="meal-management-tab" data-bs-toggle="pill" href="#meal-management" role="tab" aria-controls="v-pills-meal" aria-selected="false">Meal Management</a>
                    </li>
                </ul>
            </div>
            <div class="col-9 tab-content">
                {/* <!-- Tab content --> */}
                <div class="tab-pane fade show active" id="member-management" role="tabpanel" aria-labelledby="member-management-tab">
                    <MemberTable/>

                </div>
                <div class="tab-pane fade" id="volunteer-management" role="tabpanel" aria-labelledby="volunteer-management-tab">
                    <h3>Tab 2 Content</h3>
                    <p>This is the content of tab 2.</p>
  
                </div>
                <div class="tab-pane fade" id="meal-management" role="tabpanel" aria-labelledby="meal-management-tab">
                    <h3>Tab 3 Content</h3>
                    <p>This is the content of tab 3.</p>

                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
