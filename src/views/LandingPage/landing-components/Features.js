import React, { Fragment } from "react";

export const Features = () =>{
    return(
		<Fragment>
        <section className="section " id="features">
					<div className="container">
						<div className="vertical-content row">
							<div className="col-lg-5">
								<div className="features-box">
									<h3>
									Why do you need our service?
									</h3>
									<p className="text-muted web-desc">
									In oil stations it is frequently necessary to evaluate whether the separation equipment has the optimal capacity to process the required production volumes.
									</p>
									
									<p className="text-muted web-desc">Our role is to automate the calculations made on a daily basis by engineers to determine if their processing capabilities are exceeded and determine properly and fast if they are operating at design conditions.</p>
									<ul className="text-muted list-unstyled mt-4 features-item-list">
									</ul>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="features-img features-right text-right">
									<img src="/assets/layout/images/SuiOpSoft-logo-sin-letras.png" alt="macbook" className="img-fluid img-fluid-petrol" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section section-lg bg-web-desc" >
				<div className="bg-overlay" />
				<div className="container mt-5">
					<div className="row">
						<div className="text-center col-lg-12 mt-1 mb-5">
							<h2 className="text-white">Build your future more easily.</h2>							
						</div>
					</div>
				</div>
			</section>
		</Fragment>
    )
}