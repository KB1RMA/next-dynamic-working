import dynamic from 'next/dynamic';

const Components = {};
Components['component-one'] = dynamic(import(
    /* webpackChunkName: "dynamic-component-one" */
    './dynamic/component-one'
));
Components['component-two'] = dynamic(import(
    /* webpackChunkName: "dynamic-component-one" */
    './dynamic/component-two'
));

const DynamicComponent = ({ name }) => {
    const ComponentToRender = Components[name];

    return (
        <ComponentToRender />
    );
}
 
export default DynamicComponent;