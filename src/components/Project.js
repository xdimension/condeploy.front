import imgBg1 from "../assets/img/path3.png"
import imgBox1 from "../assets/img/bitcoin.png"
import imgBox2 from "../assets/img/ethereum.png"
import imgBox3 from "../assets/img/ripp.png"

export const Project = () => {
    const projects = [
        { 
            boxImg: imgBox1, 
            cssColor: 'primary' 
        },
        { 
            boxImg: imgBox2, 
            cssColor: 'success' 
        },
        { 
            boxImg: imgBox3, 
            cssColor: 'info' 
        },
        
    ]

return (
    <section className="section section-lg section-coins">
    <img src={imgBg1} className="path" />
    <div className="container">
    <div className="row">
        <div className="col-md-4">
        <hr className="line-info" />
        <h1>Choose the dApp{" "}
            <span className="text-info">you want to install</span>
        </h1>
        </div>
    </div>
    <div className="row">
        {projects.map((p) => 
        <div className="col-md-4">
            <div className="card card-coin card-plain">
                <div className="card-header">
                <img src={p.boxImg} className="img-center img-fluid" />
                </div>
                <div className="card-body">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <h4 className="text-uppercase">Light Coin</h4>
                    <span>Plan</span>
                    <hr className={"line-"+p.cssColor} />
                    </div>
                </div>
                <div className="row">
                    <ul className="list-group">
                    <li className="list-group-item">50 messages</li>
                    <li className="list-group-item">100 emails</li>
                    <li className="list-group-item">24/7 Support</li>
                    </ul>
                </div>
                </div>
                <div className="card-footer text-center">
                <button className={"btn btn-"+p.cssColor+" btn-simple"}>Get plan</button>
                </div>
            </div>
        </div>
        )}
    </div>
    </div>
    </section>
)
}