import Col from "react-bootstrap/Col";
import ExamplePopover from "@/components/ExamplePopover";
import ExampleOffcanvas from "./ExampleOffcanvas";

const ExampleComponents: React.FC = () => {
    return (
        <>
        <Col lg={8} className="px-0">
            <p className="fs-4">
            You&apos;ve successfully loaded the Stylescape + React example! It&apos;s loaded
            up with <a href="https://getbootstrap.com/">Stylescape 5</a> and uses
            React and Next.js to compile and bundle our Sass. It also features a
            handful of custom React components built using{" "}
            <a href="https://react-bootstrap.github.io/">React Stylescape</a>.
            </p>
            <p>
            If this button appears blue and the link appears purple, you&apos;ve done
            it!
            </p>
        </Col>

        <ExampleOffcanvas className="me-3" />
        <ExamplePopover />
        </>
    );
};

export default ExampleComponents;
