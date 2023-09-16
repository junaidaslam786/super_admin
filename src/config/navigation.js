/* eslint-disable no-sparse-arrays */
import React from "react"
import * as Icon from "react-feather"
import {ReactComponent as DashIcon} from '../assets/Icon.svg'
import {ReactComponent as ProfileIcon} from '../assets/Profile.svg'
import {ReactComponent as Users} from '../assets/users.svg'
import {ReactComponent as News} from '../assets/news.svg'
import {ReactComponent as Traders} from "../assets/traders.svg"
import {ReactComponent as Subs} from '../assets/subs.svg'
import {ReactComponent as Property} from "../assets/Property.svg"
import {ReactComponent as Appointments} from '../assets/Appointments.svg'
import {ReactComponent as Blog} from '../assets/Blog.svg'
import {ReactComponent as Community} from '../assets/Community.svg'
import styles from '../config/navigationConfig.module.css'


const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    // type: "collapse",
    icon: <DashIcon className={styles.icon} />,
    badge: "warning",
    // badgeText: "2",
    navLink: "/dashboard"
  },
  {
    id: "profile",
    title: "Profile",
    // type: "collapse",
    icon: <ProfileIcon className={styles.icon} />,
    badge: "warning",
    // badgeText: "2",
    navLink: "/profile"
  },
  {
    id: "userManagement",
    title: "User Management",
    type: "collapse",
    icon: <Subs className={styles.icon} />,
    children: [
      {
        id: "createUser",
        title: "Create User",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/create-user"
      },
      {
        id: "listingUser",
        title: "Users Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        // navLink: "/user/listing-admin"
        navLink: "/all-users"
      },
      {
        id: "listingCustomers",
        title: "Customers",
        type: "item",
        icon: <Icon.Circle size={12} />,
        // navLink: "/user/listing-admin"
        navLink: "/all-customers"
      },
      {
        id: "listingTraders",
        title: "Traders",
        type: "item",
        icon: <Icon.Circle size={12} />,
        // navLink: "/user/listing-admin"
        navLink: "/all-traders"
      }
    ]
  },
  {
    id: "property",
    title: "Property",
    type: "collapse",
    icon: <Property className={styles.icon} />,
    children: [
      {
        id: "propertyList2",
        title: "Property List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin"],
        navLink: "/property-list"
      },
      {
        id: "propertylisting",
        title: "Add Property",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin"],
        navLink: "/add-property"
      },
      // {
      //   id: "propertyRemoveRequest",
      //   title: "Property Remove Request",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin"],
      //   navLink: "/property/property-remove-request"
      // },

      // {
      //   id: "removedProperty",
      //   title: "Removed Property",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin"],
      //   navLink: "/property/removed-property"
      // },
      // {
      //   id: "propertyTypedList",
      //   title: "Property Typed List",
      //   type: "item",
      //   icon: <Icon.Home size={20} />,
      //   permissions: ["admin"],
      //   navLink: "/property/property-typed-list"
      // },
    ],
  },
  {
    id: "appointments",
    title: "Appointments",
    type: "collapse",
    icon: <Appointments className={styles.icon} />,
    children: [
      {
        id: "all-appointments",
        title: "Appointments Listing",
        // title: "Completed Appointments",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/appointments/all-appointments"
      },
      // {
      //   id: "upcoming-appointments",
      //   title: "Upcoming Appointments",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   navLink: "/appointments/upcoming-appointments"
      // }
    ]
  },
  {
    id: "news-management",
    title: "News",
    type: "collapse",
    icon: <News className={styles.icon} />,
    children: [
      {
        id: "add-news",
        title: "Add News",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/news/add-news"
      },
      {
        id: "all-news",
        title: "News Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/news/all-news"
      }
    ]
  },
  {
    id: "blog-management",
    title: "Blogs",
    type: "collapse",
    icon: <Blog className={styles.icon} />,
    children: [
      {
        id: "add-blog",
        title: "Add Blog",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/blog/add-blog"
      },
      {
        id: "all-blog",
        title: "Blogs Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/blog/all-blogs"
      }
    ]
  },
  {
    id: "community-qa-management",
    title: "Community",
    type: "collapse",
    icon: <Community className={styles.icon} />,
    children: [
      {
        id: "add-community",
        title: "Add Community",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/cms/add-community"
      },
      {
        id: "community-listing",
        title: "Community Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/cms/community-listing"
      }
    ]
  },

  {
    id: "customers",
    title: "Customers",
    type: "collapse",
    icon: <Users className={styles.icon} />,
    children: [
      {
        id: "add-customer",
        title: "Add Customer",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/customer/add-customer"
      },
      {
        id: "customer-listing",
        title: "Customer Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/customer/customer-listing"
      },
    ]
  },
  {
    id: "traders",
    title: "Traders",
    type: "collapse",
    icon: <Traders className={styles.icon} />,
    children: [
      {
        id: "add-trader",
        title: "Add Trader",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/trader/add-trader"
      },
      {
        id: "traders-listing",
        title: "Traders Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/trader/trader-listing"
      },
      {
        id: "blocked-traders",
        title: "Blocked Traders",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/trader/blocked-traders"
      }
    ]
  },
  

]

export default navigationConfig
