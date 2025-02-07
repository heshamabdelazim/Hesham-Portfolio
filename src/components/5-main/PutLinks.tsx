
function PutLinks({ repo, demo }:{repo:String, demo:String}) :React.JSX.Element  {
    const AreNoLinks = !demo && !repo; //true or false
    if (AreNoLinks) {
        return(<h4>Soon.</h4>)
    }
    return (
          <>
            {repo && (
              <a href={repo} target="_blank">
                <span className="icon-github" />
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank">
                <span className="icon-link" />
              </a>
            )}
          </>
        );

}
export default PutLinks;