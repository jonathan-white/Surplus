import React from "react";
import { Row, Card, CardTitle, Col } from 'react-materialize'
import "./UserProfile.css";
import Input from "react-materialize/lib/Input";

const UserProfile = props => (
    <div>
        <Card title='Add an Item'>
            <div>Picture goes here</div>
            <form>
                <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                />
            </form>
        </Card>
    </div>
)

export default UserProfile;