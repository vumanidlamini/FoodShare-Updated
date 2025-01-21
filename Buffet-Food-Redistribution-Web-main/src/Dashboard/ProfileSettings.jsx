// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function App() {
//     return (
//         <div className="container mt-4">
//             <h4 className="font-weight-bold py-3 mb-4">Account Settings</h4>
//             <div className="card">
//                 <div className="row no-gutters">
//                     <div className="col-md-3">
//                         <div className="list-group">
//                             <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">General</a>
//                             <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">Change Password</a>
//                             <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-info">Info</a>
//                             <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-social-links">Social Links</a>
//                             <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-connections">Connections</a>
//                             <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-notifications">Notifications</a>
//                         </div>
//                     </div>
//                     <div className="col-md-9">
//                         <div className="tab-content">
//                             <div className="tab-pane fade show active" id="account-general">
//                                 <div className="card-body d-flex align-items-center">
//                                     <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Profile" className="d-block" style={{ width: '80px', height: 'auto' }} />
//                                     <div className="ml-4">
//                                         <label className="btn btn-outline-primary">
//                                             Upload New Photo
//                                             <input type="file" className="d-none" />
//                                         </label>
//                                         &nbsp;
                                        
//                                     </div>
//                                        <button type="button" className="btn btn-secondary">Reset</button>
//                                         <div className="text-muted small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
//                                 </div>
//                                 <hr className="border-light" />
//                                 <div className="card-body">
//                                     <div className="form-group">
//                                         <label className="form-label">Username</label>
//                                         <input type="text" className="form-control" value=""  />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="form-label">Name</label>
//                                         <input type="text" className="form-control" value=""  />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="form-label">E-mail</label>
//                                         <input type="text" className="form-control" value="" />
//                                         <div className="alert alert-warning mt-3">
//                                             Your email is not confirmed. Please check your inbox.<br />
//                                             <a href="#">Resend confirmation</a>
//                                         </div>
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="form-label">Company</label>
//                                         <input type="text" className="form-control" value="Company Ltd." readOnly />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="tab-pane fade" id="account-change-password">
//                                 <div className="card-body">
//                                     <div className="form-group">
//                                         <label className="form-label">Current Password</label>
//                                         <input type="password" className="form-control" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="form-label">New Password</label>
//                                         <input type="password" className="form-control" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="form-label">Repeat New Password</label>
//                                         <input type="password" className="form-control" />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="tab-pane fade" id="account-info">
//                                 <div className="card-body">
//                                     <div className="form-group">
//                                         <label className="form-label">Bio</label>
//                                         <textarea className="form-control" rows="5" readOnly>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus.</textarea>
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="form-label">Birthday</label>
//                                         <input type="text" className="form-control" value="May 3, 1995" readOnly />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="form-label">Country</label>
//                                         <select className="custom-select" disabled>
//                                             <option>USA</option>
//                                             <option selected>Canada</option>
//                                             <option>UK</option>
//                                             <option>Germany</option>
//                                             <option>France</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <hr className="border-light" />
//                                 <div className="card-body">
//                                     <h6 className="mb-4">Contacts</h6>
//                                     <div className="form-group">
//                                         <label className="form-label">Phone</label>
//                                         <input type="text" className="form-control" value="+0 (123) 456 7891" readOnly />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="form-label">Website</label>
//                                         <input type="text" className="form-control" readOnly />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="tab-pane fade" id="account-social-links">
//                                 <div className="card-body">
//                                     <div className="form-group">
//                                         <label className="form-label">Twitter</label>
//                                         <input type="text" className="form-control" value="https://twitter.com/user" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="form-label">Facebook</label>
//                                         <input type="text" className="form-control" value="https://www.facebook.com/user" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="form-label">Google+</label>
//                                         <input type="text" className="form-control" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="form-label">LinkedIn</label>
//                                         <input type="text" className="form-control" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="form-label">Instagram</label>
//                                         <input type="text" className="form-control" value="https://www.instagram.com/user" />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="tab-pane fade" id="account-connections">
//                                 <div className="card-body">
//                                     <button type="button" className="btn btn-primary">Connect to <strong>Twitter</strong></button>
//                                 </div>
//                                 <hr className="border-light" />
//                                 <div className="card-body">
//                                     <h5 className="mb-2">
//                                         <a href="#" className="float-right text-muted text-tiny">
//                                             <i className="ion ion-md-close"></i> Remove
//                                         </a>
//                                         <i className="ion ion-logo-google text-google"></i> You are connected to Google:
//                                     </h5>
//                                     <a href="mailto:nmaxwell@mail.com">nmaxwell@mail.com</a>
//                                 </div>
//                                 <hr className="border-light" />
//                                 <div className="card-body">
//                                     <button type="button" className="btn btn-primary">Connect to <strong>Facebook</strong></button>
//                                 </div>
//                                 <hr className="border-light" />
//                                 <div className="card-body">
//                                     <button type="button" className="btn btn-primary">Connect to <strong>Instagram</strong></button>
//                                 </div>
//                             </div>
//                             <div className="tab-pane fade" id="account-notifications">
//                                 <div className="card-body">
//                                     <h6 className="mb-4">Activity</h6>
//                                     <div className="form-group">
//                                         <label className="custom-control custom-checkbox">
//                                             <input type="checkbox" className="custom-control-input" checked />
//                                             <span className="custom-control-label">Email me when someone comments on my article</span>
//                                         </label>
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="custom-control custom-checkbox">
//                                             <input type="checkbox" className="custom-control-input" checked />
//                                             <span className="custom-control-label">Email me when someone answers on my forum thread</span>
//                                         </label>
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="custom-control custom-checkbox">
//                                             <input type="checkbox" className="custom-control-input" />
//                                             <span className="custom-control-label">Email me when someone follows me</span>
//                                         </label>
//                                     </div>
//                                 </div>
//                                 <hr className="border-light" />
//                                 <div className="card-body">
//                                     <h6 className="mb-4">Application</h6>
//                                     <div className="form-group">
//                                         <label className="custom-control custom-checkbox">
//                                             <input type="checkbox" className="custom-control-input" checked />
//                                             <span className="custom-control-label">News and announcements</span>
//                                         </label>
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="custom-control custom-checkbox">
//                                             <input type="checkbox" className="custom-control-input" />
//                                             <span className="custom-control-label">Weekly product updates</span>
//                                         </label>
//                                     </div>
//                                     <div className="form-group">
//                                         <label className="custom-control custom-checkbox">
//                                             <input type="checkbox" className="custom-control-input" checked />
//                                             <span className="custom-control-label">Weekly blog digest</span>
//                                         </label>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="text-right mt-3">
//                 <button type="button" className="btn btn-primary">Save changes</button>&nbsp;
//                 <button type="button" className="btn btn-secondary">Cancel</button>
//             </div>
//         </div>
//     );
// }

// export default App;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function ProfileSettings() {
    return (
        <div className="container mt-4">
            <h4 className="font-weight-bold py-3 mb-4">Account Settings</h4>
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <div className="list-group">
                            <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">General</a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">Change Password</a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-info">Info</a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-social-links">Social Links</a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-connections">Connections</a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-notifications">Notifications</a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="account-general">
                                <div className="card-body d-flex flex-column flex-md-row align-items-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Profile" className="d-block rounded-circle" style={{ width: '80px', height: 'auto' }} />
                                    <div className="ml-md-4 mt-2 mt-md-0">
                                        <label className="btn btn-outline-primary">
                                            Upload New Photo
                                            <input type="file" className="d-none" />
                                        </label>
                                        &nbsp;
                                        <button type="button" className="btn btn-secondary">Reset</button>
                                        <div className="text-muted small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                                    </div>
                                </div>
                                <hr className="border-light" />
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label className="form-label">Username</label>
                                            <input type="text" className="form-control" defaultValue="nmaxwell" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" defaultValue="Nelle Maxwell" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">E-mail</label>
                                            <input type="email" className="form-control" defaultValue="nmaxwell@mail.com" />
                                            <div className="alert alert-warning mt-3">
                                                Your email is not confirmed. Please check your inbox.<br />
                                                <a href="#">Resend confirmation</a>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Company</label>
                                            <input type="text" className="form-control" defaultValue="Company Ltd." />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="account-change-password">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label className="form-label">Current Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">New Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Repeat New Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="account-info">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label className="form-label">Bio</label>
                                            <textarea className="form-control" rows="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus.</textarea>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Birthday</label>
                                            <input type="text" className="form-control" defaultValue="May 3, 1995" />
                                        </div>
                                        {/* <div className="form-group">
                                            <label className="form-label">Country</label>
                                            <select className="custom-select">
                                                <option>USA</option>
                                                <option selected>Canada</option>
                                                <option>UK</option>
                                                <option>Germany</option>
                                                <option>France</option>
                                            </select>
                                        </div> */}
                                        <div className="form-group">
                                              <label className="form-label">Province</label>
                                              <select className="custom-select">
                                                  <option value="" disabled selected>Select Province</option>
                                                  <option value="Gauteng">Gauteng</option>
                                                  <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                                                  <option value="Western Cape">Western Cape</option>
                                                  <option value="Eastern Cape">Eastern Cape</option>
                                                  <option value="Limpopo">Limpopo</option>
                                                  <option value="Mpumalanga">Mpumalanga</option>
                                                  <option value="North West">North West</option>
                                                  <option value="Free State">Free State</option>
                                                  <option value="Northern Cape">Northern Cape</option>
                                              </select>
                                          </div>

                                    </form>
                                    <hr className="border-light" />
                                    <div className="card-body">
                                        <h6 className="mb-4">Contacts</h6>
                                        <form>
                                            <div className="form-group">
                                                <label className="form-label">Phone</label>
                                                <input type="text" className="form-control" defaultValue="+0 (123) 456 7891" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Website</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="account-social-links">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label className="form-label">Twitter</label>
                                            <input type="text" className="form-control" defaultValue="https://twitter.com/user" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Facebook</label>
                                            <input type="text" className="form-control" defaultValue="https://www.facebook.com/user" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Google+</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">LinkedIn</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Instagram</label>
                                            <input type="text" className="form-control" defaultValue="https://www.instagram.com/user" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="account-connections">
                                <div className="card-body">
                                    <button type="button" className="btn btn-primary">Connect to <strong>Twitter</strong></button>
                                </div>
                                <hr className="border-light" />
                                <div className="card-body">
                                    <h5 className="mb-2">
                                        <a href="#" className="float-right text-muted"><i className="ion ion-md-close"></i> Remove</a>
                                        <i className="ion ion-logo-google text-google"></i> You are connected to Google:
                                    </h5>
                                    <a href="mailto:user@example.com">user@example.com</a>
                                </div>
                                <hr className="border-light" />
                                <div className="card-body">
                                    <button type="button" className="btn btn-primary">Connect to <strong>Facebook</strong></button>
                                </div>
                                <hr className="border-light" />
                                <div className="card-body">
                                    <button type="button" className="btn btn-primary">Connect to <strong>Instagram</strong></button>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="account-notifications">
                                <div className="card-body">
                                    <h6 className="mb-4">Activity</h6>
                                    <div className="form-group">
                                        <label className="switch">
                                            <input type="checkbox" className="switch-input" defaultChecked />
                                            <span className="switch-indicator"></span>
                                            <span className="switch-label">Receive notifications for new activities</span>
                                        </label>
                                    </div>
                                    <hr className="border-light" />
                                    <h6 className="mb-4">Messages</h6>
                                    <div className="form-group">
                                        <label className="switch">
                                            <input type="checkbox" className="switch-input" />
                                            <span className="switch-indicator"></span>
                                            <span className="switch-label">Receive notifications for new messages</span>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label className="switch">
                                            <input type="checkbox" className="switch-input" defaultChecked />
                                            <span className="switch-indicator"></span>
                                            <span className="switch-label">Show notifications on lock screen</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right mt-3">
                <button type="button" className="btn btn-primary">Save changes</button>&nbsp;&nbsp;
                <button type="button" className="btn btn-secondary">Cancel</button>
            </div>
        </div>
    );
}

export default ProfileSettings;
