import SingleClass from "./SingleClass"

export default function SkillShareClasses() {

    const classes: IClass[] = [{
        image: '/assets/finance-planner.jpg',
        link: "https://www.skillshare.com/classes/How-to-Create-a-Finance-Planner-Personal-Budgeting-in-Microsoft-Excel/2055873377",
        title: 'How To Create A Finance Planner',
        students: "138"
    }, {
        image: '/assets/food-planner.jpg',
        link: "https://www.skillshare.com/classes/How-To-Create-a-Random-Food-Meal-Planner-in-Microsoft-Excel/538955742",
        title: 'How To Create A Meal Planner',
        students: "43"
    }, {
        image: '/assets/payroll-calculator.jpg',
        link: "https://www.skillshare.com/classes/How-to-Create-a-Payroll-Calculator-in-Microsoft-Excel/648854705",
        title: 'How To Create A Payroll Calculator',
        students: "44"
    }]

    return (
        <>
        <h2 className="text-center text-4xl font-semibold my-10 select-none">Skill Share Classes</h2>
        <div className="flex justify-center select-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] px-6 place-items-center place-content-center">
                { classes.map((skClass, index) => <SingleClass key={index} {...skClass} />) }
            </div>
        </div>
        </>
    )
}