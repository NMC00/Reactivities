import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: String) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

//this method destructers the props interface to get right at the properties within it
export default function ActivityDashboard({activities, 
    selectedActivity, selectActivity, cancelSelectActivity, 
    editMode, openForm, closeForm, createOrEdit, 
    deleteActivity}: Props) {
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectActivity={cancelSelectActivity} 
                    openForm={openForm}
                />}
                {editMode &&
                <ActivityForm 
                    closeForm={closeForm} 
                    activity={selectedActivity}
                    createOrEdit={createOrEdit} 
                />}
            </Grid.Column>
        </Grid>
    )
}

//This is one way to handle the props in a structured way
// export default function ActivityDashboard(props: Props) {
//     return(
//         <Grid>
//             <Grid.Column width='10'>
//                 <List>
//                     {props.activities.map(activity => (
//                         <List.Item key={activity.id}>
//                             {activity.title}
//                         </List.Item>
//                     ))}
//                 </List>
//             </Grid.Column>
//         </Grid>
//     )
// }