const HomepageHeader = ({ eyebrow, title }) => {
    return (
        <div className="homepage-header">
            <h6>{eyebrow}</h6>
            <h1>{title}</h1>
        </div>
    );
};

export default HomepageHeader;
