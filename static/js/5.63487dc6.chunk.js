(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{293:function(e,t,a){"use strict";var n=a(34),s=a(35),r=a(37),o=a(36),i=a(38),c=a(0),u=a.n(c),l=a(30),_=a(12),m=function(e){return{isAuth:e.LoginAuthReducer.isAuth}};t.a=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,t),Object(s.a)(a,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(l.a,{to:"/login"})}}]),a}(u.a.Component);return Object(_.b)(m)(t)}},294:function(e,t,a){e.exports={users_section:"User_users_section__3T6oR",users_title:"User_users_title__3N4x3",users_section_avatar:"User_users_section_avatar__9GOoa",users_section_btn:"User_users_section_btn__3TcJD",users_section_infoUser:"User_users_section_infoUser__2WSdW",users_section_fullName:"User_users_section_fullName__1XICE",users_section_status:"User_users_section_status__106vM",users_section_country:"User_users_section_country__2aJnY",users_section_city:"User_users_section_city__1MoYH"}},305:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(34),o=a(35),i=a(37),c=a(36),u=a(38),l=a(294),_=a.n(l),m=a(12),p=a(95),g=a(13),d=function(e){return s.a.createElement("div",{className:_.a.users_section},s.a.createElement("div",{className:_.a.users_section_avatar},s.a.createElement(g.b,{to:"/Profile/"+e.id},s.a.createElement("img",{src:e.src,alt:"avatar"})),e.followed),s.a.createElement("div",{className:_.a.users_section_infoUser},s.a.createElement("div",{className:_.a.users_section_infoLeft},s.a.createElement("div",{className:_.a.users_section_fullName},e.name),s.a.createElement("div",{className:_.a.users_section_status},e.status)),s.a.createElement("div",{className:_.a.users_section_infoRight},s.a.createElement("div",{className:_.a.users_section_country},e.country,","),s.a.createElement("div",{className:_.a.users_section_city},e.city))))},h=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.UsersData,a=e.toggleForFollow,n=e.unFollowThunkCreator,r=e.followThunkCreator,o=t.map((function(e){return s.a.createElement(d,{key:e.id,name:e.name,status:e.status,country:"u.location.country",city:"u.location.city",src:null!=e.photos.small?e.photos.small:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",id:e.id,followed:e.followed?s.a.createElement("button",{disabled:a.some((function(t){return t===e.id})),className:_.a.users_section_btn,onClick:function(){n(e.id)}},"unFollow"):s.a.createElement("button",{disabled:a.some((function(t){return t===e.id})),className:_.a.users_section_btn,onClick:function(){r(e.id)}},"Follow")})}));return s.a.createElement("div",null,o)}}]),t}(s.a.Component),f=Object(m.b)((function(e){return{UsersData:e.FindUsersData.UsersData,toggleForFollow:e.FindUsersData.toggleForFollow}}),{unFollowThunkCreator:p.e,followThunkCreator:p.d})(h),b=a(293),v=a(7),U=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,a=e.pageSize;this.props.addUsersThunkCreator(t,a)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",{className:_.a.users_title},"Users: "),s.a.createElement(f,null))}}]),t}(s.a.Component),w=Object(v.d)(Object(m.b)((function(e){return{currentPage:e.FindUsersData.currentPage,pageSize:e.FindUsersData.pageSize}}),{addUsersThunkCreator:p.b}),b.a)(U),E=a(96),y=a.n(E),O=a(136),j=function(e){for(var t=e.totalUsersCount,a=e.pageSize,n=e.currentPage,r=e.newUsersPage,o=(e.portionSize,Math.ceil(t/a)),i=[],c=1;c<=o;c++)i.push(c);return s.a.createElement("div",{className:y.a.page_block},s.a.createElement("img",{className:y.a.page_img_left,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Red_Arrow_Left.svg/1200px-Red_Arrow_Left.svg.png"}),i.map((function(e,t){return s.a.createElement("div",{className:n===e&&y.a.page_item,key:t,onClick:function(){return r(e)}},e)})),s.a.createElement("img",{className:y.a.page_img_right,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Red_Arrow_Right.svg/1200px-Red_Arrow_Right.svg.png"}))},k=function(e){var t=e.totalUsersCount,a=e.pageSize,n=e.isFetching,r=e.currentPage,o=e.newUsersPage;return s.a.createElement("div",null,s.a.createElement(O.a,{isFetching:n}),s.a.createElement(j,{totalUsersCount:t,pageSize:a,currentPage:r,newUsersPage:o}))},C=a(50),F=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).newUsersPage=function(e){var t=a.props.pageSize;a.props.addUsersPageThunkCreator(e,t)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.totalUsersCount,a=e.pageSize,n=e.currentPage,r=e.isFetching;return s.a.createElement("div",null,s.a.createElement(k,{totalUsersCount:t,pageSize:a,currentPage:n,newUsersPage:this.newUsersPage,isFetching:r}))}}]),t}(s.a.Component),N=Object(m.b)((function(e){var t=C.a.getFindUsersData;return{pageSize:t.getPageSize(e),totalUsersCount:t.getTotalUsersCount(e),currentPage:t.getCurrentPage(e),isFetching:t.getIsFetching(e)}}),{addUsersPageThunkCreator:p.a})(F);t.default=function(){return s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement(N,null))}}}]);
//# sourceMappingURL=5.63487dc6.chunk.js.map