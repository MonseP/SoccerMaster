import React, {Component} from 'react';
import {Drawer, MenuItem} from 'material-ui';
import HomeIcon from 'material-ui/svg-icons/action/home';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import Resumen from 'material-ui/svg-icons/editor/pie-chart';
import System from 'material-ui/svg-icons/action/credit-card';
import Cart from 'material-ui/svg-icons/editor/monetization-on';
import People from 'material-ui/svg-icons/social/people';
import Face from 'material-ui/svg-icons/action/face';
import Invent from 'material-ui/svg-icons/social/person-add';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from './logo.png';
import * as navBarNameActions from '../../actions/navBarNameActions'

class Nav extends Component {

    state = {
        active:0
    };

    oddEvent = (num) => {
        //this.setState({active:num});
    };

    changeName = (name) => {
        this.props.navBarNameActions.changeName(name);
    };

    render(){
        //const {oddEvent} = this;
        const {active} = this.state;
        return(

            <Drawer
                containerStyle={styles.draw}
                open={this.props.open}
                docked={true}
                width='20%'>





                    <img className="logo-dos" src={logo} alt="logo"/>






                <NavLink
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{
                        fontWeight: 'bold',
                    }}
                    //isActive={()=>this.oddEvent(1)}
                    exact
                    to="/">

                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Inicio"
                        leftIcon={<HomeIcon/>}
                        //onClick={()=>this.changeName('Ingresos')}
                    />

                </NavLink>




                {/*  <NavLink
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{
                        fontWeight: 'bold',
                    }}
                    //isActive={()=>this.oddEvent(1)}
                    to="/ingresos">
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Ingresos"
                        leftIcon={<NoteAdd />}
                        //onClick={()=>this.changeName('Ingresos')}
                    />
                </NavLink>


                <NavLink
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{
                        fontWeight: 'bold',
                    }}
                    //isActive={()=>this.oddEvent(1)}
                    to="/torneo">
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Torneo"
                        leftIcon={<NoteAdd />}
                        //onClick={()=>this.changeName('Ingresos')}
                    />
                </NavLink> */}

                <NavLink
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{
                        fontWeight: 'bold',
                    }}
                    //isActive={()=>this.oddEvent(1)}
                    to="/torneos">
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Torneos"
                        leftIcon={<NoteAdd />}
                        //onClick={()=>this.changeName('Ingresos')}
                    />
                </NavLink>



                {/*


                <NavLink
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{
                        fontWeight: 'bold',
                    }}
                    //isActive={()=>this.oddEvent(1)}
                    exact
                    to="/gastos">
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Gastos"
                        leftIcon={<Cart />} />
                </NavLink>

                <NavLink
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{
                        fontWeight: 'bold',
                    }}
                    //isActive={()=>this.oddEvent(1)}
                    exact
                    to="/caja">
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Pagos"
                        leftIcon={<System />} />
                </NavLink>

                <NavLink
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{
                        fontWeight: 'bold',
                    }}
                    //isActive={()=>this.oddEvent(1)}
                    exact
                    to="/resumen">
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Resumen"
                        leftIcon={<Resumen />} />
                </NavLink>


                   <NavLink
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{
                        fontWeight: 'bold',
                    }}
                    //isActive={()=>this.oddEvent(1)}
                    to="/clientes">
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Clientes"
                        leftIcon={<Face />}

                        //onClick={()=>this.changeName('Ingresos')}
                    />

                </NavLink>



                     */}

                <NavLink
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{
                        fontWeight: 'bold',
                    }}
                    //isActive={()=>this.oddEvent(1)}
                    exact
                    to="/signup">
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Registrar Usuario"
                        leftIcon={<Invent />} />

                </NavLink>

                <NavLink
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{
                        fontWeight: 'bold',
                    }}
                    //isActive={()=>this.oddEvent(1)}
                    to="/pdf">
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Credenciales"
                        leftIcon={<Face />}

                        //onClick={()=>this.changeName('Ingresos')}
                    />

                </NavLink>


                <NavLink
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{
                        fontWeight: 'bold',
                    }}
                    //isActive={()=>this.oddEvent(1)}
                    exact
                    to="/goleadores">
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Goleadores"
                        leftIcon={<People />} />
                </NavLink>






            </Drawer>
        );
    }
}

const styles = {
    draw:{
        top:'64px',

    },
    active:{
        backgroundColor:'black'
    }
};

function mapStateToProps(state, ownProps) {
    return {
        navBarName: state.navBarName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        navBarNameActions: bindActionCreators(navBarNameActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
