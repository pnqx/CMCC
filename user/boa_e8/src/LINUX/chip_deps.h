#ifndef CHIP_DEPS_H
#define CHIP_DEPS_H
//Weight Define for ACL Rules
//The larger number, the higher priority.
typedef enum 
{ 
	RG_RESERVED_ACL_WEIGHT=0, 
	RG_OMCI_QOS_ACL_WEIGHT=100,   //For OMCI set QoS rule
	RG_DEFAULT_ACL_WEIGHT=200,	  
	RG_QOS_LOW_ACL_WEIGHT=300,	  //For TR069, Web UI set QoS rule, Lower priority in QoS.
	RG_QOS_WANVPNINTERFACE_ACL_WEIGHT=325,
	RG_QOS_USER_APP_WEIGHT=330, 	  //For TR069, Web UI set QoS rule.
	RG_QOS_WANINTERFACE_ACL_WEIGHT=337,
	RG_QOS_ACL_WEIGHT=350,		  //For TR069, Web UI set QoS rule.
	RG_TRAP_ACL_WEIGHT = 375,
	RG_FIREWALL_ACL_WEIGHT=400,
	RG_ACL_HIGHEST_PRI_WEIGHT=500 
} RG_ACL_WEIGHT_T; 
#endif