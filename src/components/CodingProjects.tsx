import SingleCodingProject from "./SingleCodingProject"

export default function CodingProjects() {

    const codingProjects: ICodingProjects[] = [{
        image: '/assets/finance-planner.jpg',
        link: "https://www.skillshare.com/codingProjects/How-to-Create-a-Finance-Planner-Personal-Budgeting-in-Microsoft-Excel/2055873377",
        title: 'Create A Finance Planner',
        description: "138"
    }, {
        image: '/assets/food-planner.jpg',
        link: "https://www.skillshare.com/codingProjects/How-To-Create-a-Random-Food-Meal-Planner-in-Microsoft-Excel/538955742",
        title: 'Create A Meal Planner',
        description: "43"
    }, {
        image: '/assets/payroll-calculator.jpg',
        link: "https://www.skillshare.com/codingProjects/How-to-Create-a-Payroll-Calculator-in-Microsoft-Excel/648854705",
        title: 'Create A Payroll Calculator',
        description: "44"
    }]

    return (
        <>
        <h2 className="text-center text-4xl font-semibold my-10 select-none">Coding Projects</h2>
        { codingProjects.map((project, index) => <SingleCodingProject key={index} {...project} />) }
        </>
    )
}