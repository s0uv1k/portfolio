import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function () {
  return (
    <div>
        <footer className="bd-footer py-5 mt-5 bg-dark">
            <div className="container py-5">
                <div class="row">
                    <div className="col-lg-3 mb-3">
                    <h5 style={{color: 'white'}}>Connect with me </h5>
                    <a href="https://www.facebook.com/souvik.sarkar.56884761?mibextid=ZbWKwL"> <FacebookOutlinedIcon/> Facebook </a><br/><br/>
                    <a href="https://www.linkedin.com/in/souvik-sarkar-831278188"><LinkedInIcon/> LinkedIn </a><br/><br/>
                    <a href="https://instagram.com/photocopies.by.souvik?igshid=NGExMmI2YTkyZg=="><InstagramIcon/> Instagram </a><br/><br/>
                    <a href="https://github.com/s0uv1k"><GitHubIcon/> GitHub </a><br/>
                    </div>
                    
                    <div className=" col-lg-2 offset-lg-1 mb-3">
                    <h5 style={{color: 'white'}}>Connect with me </h5>
                    </div>
                    <div className=" col-lg-2 offset-lg-1 mb-3">
                    <h5 style={{color: 'white'}}>Connect with me </h5>
                    </div>
                    
                    {/*<div class="col-6 col-lg-2 mb-3">
                        <h5>Projects</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="https://github.com/twbs/bootstrap">Bootstrap 5</a></li>
                            <li class="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap 4</a></li>
                            <li class="mb-2"><a href="https://github.com/twbs/icons">Icons</a></li>
                            <li class="mb-2"><a href="https://github.com/twbs/rfs">RFS</a></li>
                            <li class="mb-2"><a href="https://github.com/twbs/bootstrap-npm-starter">npm starter</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 mb-3">
                        <h5>Community</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues">Issues</a></li>
                            <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions">Discussions</a></li>
                            <li class="mb-2"><a href="https://github.com/sponsors/twbs">Corporate sponsors</a></li>
                            <li class="mb-2"><a href="https://opencollective.com/bootstrap">Open Collective</a></li>
                            <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5">Stack Overflow</a></li>
                        </ul>
                    </div>*/}
                </div>
            </div>
        </footer>
    </div>
  )
}
