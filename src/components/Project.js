import imgBg1 from "../assets/img/path3.png"
import imgBox1 from "../assets/img/bitcoin.png"
import imgBox2 from "../assets/img/ethereum.png"
import imgBox3 from "../assets/img/ripp.png"

export const Project = () => {

return (
    <section class="section section-lg section-coins">
    <img src={imgBg1} class="path" />
    <div class="container">
    <div class="row">
        <div class="col-md-4">
        <hr class="line-info" />
        <h1>Choose the dApp{" "}
            <span class="text-info">you want to install</span>
        </h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
        <div class="card card-coin card-plain">
            <div class="card-header">
            <img src={imgBox1} class="img-center img-fluid" />
            </div>
            <div class="card-body">
            <div class="row">
                <div class="col-md-12 text-center">
                <h4 class="text-uppercase">Light Coin</h4>
                <span>Plan</span>
                <hr class="line-primary" />
                </div>
            </div>
            <div class="row">
                <ul class="list-group">
                <li class="list-group-item">50 messages</li>
                <li class="list-group-item">100 emails</li>
                <li class="list-group-item">24/7 Support</li>
                </ul>
            </div>
            </div>
            <div class="card-footer text-center">
            <button class="btn btn-primary btn-simple">Get plan</button>
            </div>
        </div>
        </div>
        <div class="col-md-4">
        <div class="card card-coin card-plain">
            <div class="card-header">
            <img src={imgBox2} class="img-center img-fluid" />
            </div>
            <div class="card-body">
            <div class="row">
                <div class="col-md-12 text-center">
                <h4 class="text-uppercase">Dark Coin</h4>
                <span>Plan</span>
                <hr class="line-success" />
                </div>
            </div>
            <div class="row">
                <ul class="list-group">
                <li class="list-group-item">150 messages</li>
                <li class="list-group-item">1000 emails</li>
                <li class="list-group-item">24/7 Support</li>
                </ul>
            </div>
            </div>
            <div class="card-footer text-center">
            <button class="btn btn-success btn-simple">Get plan</button>
            </div>
        </div>
        </div>
        <div class="col-md-4">
        <div class="card card-coin card-plain">
            <div class="card-header">
            <img src={imgBox3} class="img-center img-fluid"/>
            </div>
            <div class="card-body">
            <div class="row">
                <div class="col-md-12 text-center">
                <h4 class="text-uppercase">Bright Coin</h4>
                <span>Plan</span>
                <hr class="line-info" />
                </div>
            </div>
            <div class="row">
                <ul class="list-group">
                <li class="list-group-item">350 messages</li>
                <li class="list-group-item">10K emails</li>
                <li class="list-group-item">24/7 Support</li>
                </ul>
            </div>
            </div>
            <div class="card-footer text-center">
            <button class="btn btn-info btn-simple">Get plan</button>
            </div>
        </div>
        </div>
    </div>
    </div>
    </section>
)
}