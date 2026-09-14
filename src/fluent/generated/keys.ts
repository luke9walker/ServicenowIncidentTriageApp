import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'a0390cdd772d4c24ad9579a47ea7f258'
                    }
                    IncidentTriageUtil: {
                        table: 'sys_script_include'
                        id: 'f72252395c7f468ea81f2c3bf60a53dc'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'd1a2fcfe96c140b7bb8143305a2c4ccc'
                    }
                    'src_server_business-rules_triage-incident_ts': {
                        table: 'sys_module'
                        id: 'a0bd9d919f7c4a0493ca0bcbba1216e3'
                    }
                    'src_server_script-includes_IncidentTriageUtil_js': {
                        table: 'sys_module'
                        id: '4edd2520f293400880d9b41c98c6f6bd'
                    }
                    'triage-incident-br': {
                        table: 'sys_script'
                        id: '3d0e93ed004940349211dc37cd5f21a2'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0d0d81b2ee4049378823d7a9543be839'
                        key: {
                            name: 'x_2218530_it_incid_triage_rule'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '17bdab8ca2c54da193d1727cbd18ef27'
                        key: {
                            name: 'x_2218530_it_incid_triage_rule'
                            element: 'keyword'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '196f0211fca34a1299861ceeaced271f'
                        key: {
                            name: 'x_2218530_it_incid_triage_rule'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34a6bc9e2ece40858eec2560418846b7'
                        key: {
                            name: 'x_2218530_it_incid_triage_rule'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4d68b1372c1d4f12be215657f9e3800b'
                        key: {
                            name: 'x_2218530_it_incid_triage_rule'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5c9732e4b8a44cefbe51d5b9378229f6'
                        key: {
                            name: 'x_2218530_it_incid_triage_rule'
                            element: 'keyword'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '680ab9941e494faebd67a443dd16ec1c'
                        key: {
                            name: 'x_2218530_it_incid_triage_rule'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b730afb49ebc48d3a4624d077601d585'
                        key: {
                            name: 'x_2218530_it_incid_triage_rule'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd3e245c33f74ee2ad545ab356ea84f9'
                        key: {
                            name: 'x_2218530_it_incid_triage_rule'
                            element: 'assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c6f1e37660064f08b7080f85c007b899'
                        key: {
                            name: 'x_2218530_it_incid_triage_rule'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c9533f1b556a40ad9a221a4bdc6d1c88'
                        key: {
                            name: 'x_2218530_it_incid_triage_rule'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db494ddf9bb14867b8e927533829f35e'
                        key: {
                            name: 'x_2218530_it_incid_triage_rule'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea8edbdd87794c4a982c253e1436de7f'
                        key: {
                            name: 'x_2218530_it_incid_triage_rule'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fcdb5d58b3ae487ab6593e57b8aaee1d'
                        key: {
                            name: 'x_2218530_it_incid_triage_rule'
                            element: 'NULL'
                        }
                    },
                ]
            }
        }
    }
}
