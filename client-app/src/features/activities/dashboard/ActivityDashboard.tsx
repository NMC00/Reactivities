import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityList from "./ActivityList";

function ActivityDashboard(){
    const {activityStore} = useStore();

    useEffect(() => {
      activityStore.loadActivities();
    }, [activityStore]);
  
    if (activityStore.loadingInitial) return <LoadingComponent content='Activities are loading' />;

    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Activity Filters</h2>
                <span>Coming soon...</span>
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDashboard);