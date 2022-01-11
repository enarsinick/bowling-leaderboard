const PageHeader = ({ eyebrow, title }) => {
    return (
        <div className="page-header">
            <h6>{eyebrow}</h6>
            <h1>{title}</h1>
        </div>
    );
};

export default PageHeader;
