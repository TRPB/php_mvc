const e = React.createElement;

class ScratchResult extends React.Component {
    render() {
        const { active } = this.props;
        return <ul className={`sc-result${active ? ' active' : ''}`}>
            <li className="sc-result__item"></li>
            <li className="sc-result__item"></li>
            <li className="sc-result__item color"></li>
            <li className="sc-result__item color"></li>
            <li className="sc-result__item"></li>
            <li className="sc-result__item"></li>
        </ul>
    }
}

class Scratch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            percent: 0,
            activeBg: false
        }
    }

    componentDidMount() {
        const that = this;
        const scContainer = document.getElementById('js--sc--container')
        const sc = new ScratchCard('#js--sc--container', {
            scratchType: SCRATCH_TYPE.CIRCLE,
            containerWidth: scContainer.offsetWidth,
            containerHeight: 300,
            imageForwardSrc: '/static/images/fk_1.png',
            // imageBackgroundSrc: '/images/result.png',
            // htmlBackground: '<-- sc-inner -->',
            clearZoneRadius: 50,
            nPoints: 30,
            pointSize: 4,
            callback: function () {
                that.setState({ activeBg: true })
                // alert('Now the window will reload !')
                // window.location.reload()
            }
        })

        // Init
        sc.init().then(() => {
            // ReactDOM.render(<ScratchResult active={activeBg} />, document.getElementsByClassName('sc__inner')[0])
            sc.canvas.addEventListener('scratch.move', () => {
                let percent = sc.getPercent().toFixed(2)
                this.setState({ percent })
                console.log(percent)
            })
        }).catch((error) => {
            // image not loaded
            alert(error.message);
        });
    }

    render() {
        const { percent, activeBg } = this.state

        return <div className="sc__wrapper">
            {/* <!-- scratchcard --> */}
            <div id="js--sc--container" className="sc__container">
                <ScratchResult active={activeBg} />
                {/* <!-- background image insert here by scratchcard-js --> */}
                {/* <!-- canvas generate here --> */}
            </div>
            {/* <!-- infos --> */}
            <div className="sc__infos">
                <p>{`${percent}%`}</p>
            </div>
        </div>
    }
}
ReactDOM.render(<Scratch />, document.getElementById('root'))