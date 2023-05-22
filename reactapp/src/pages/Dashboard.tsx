import { DASHBOARD_TITLE, SYSTEM_NAME } from "../config/contants"

const Dashboard = () => {
    document.title = `${DASHBOARD_TITLE} | ${SYSTEM_NAME}`
    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}

export default Dashboard