import ExamplePopover from "@/components/ExamplePopover";
import Col from "react-bootstrap/Col";
import ExampleOffcanvas from "./ExampleOffcanvas";

const ExampleComponents: React.FC = () => {
    return (
        <>
        <Col lg={8} className="">
            <p className="">
                You&apos;ve successfully loaded the Stylescape + React example!
                <a href="https://www.scape.style/">Stylescape</a>.
            </p>
        </Col>

        <ExampleOffcanvas className="" />
        <ExamplePopover />
        </>
    );
};

export default ExampleComponents;
