ALTER TABLE saints ADD COLUMN picture VARCHAR(500);

DELETE FROM saints;

INSERT saints (name, initialMaxHP, initialATK, initialDEF, picture)
VALUES
('Hades',     1000,10,10,'https://lh4.googleusercontent.com/EBVAKKGm_TLIVb6lANnuWdwwD167ftnYiOEVw0sCCaprBKL_VqmdPraMB59BdDTMIObTKHBhRv9GlK7WxkJxOHR-QqkHnTSLPnOBQWTSXBBMfkHB6v1DSgo5akER_PcuBCDPE9Te=w53-h48'),
('Poseidon',  1000,10,10,'https://lh4.googleusercontent.com/cwWVMPXEaqb2QTElfBSh-RozmsN4Tdyiq3omNQyOTPrQpdlYASkmWeV-16wm1UpEXs0EhQkrLhHZZBqgNeMjG875pePzhqmDGY1dQnYCkFNtnXk8tXFLr2m5564t53OQSPj2Df2D=w53-h49'),
('Aiolia',    1000,10,10,'https://lh5.googleusercontent.com/owFnldvcrDtVF5LVCRI6F89y47hfhnTwhBUzVTiEwB1192ASAj2sM9S1LWn-jNI38c8MaU14SRk4VO7XkW9_U4yUvSTmpzRZB1-JrBiQLGlvO6gzi2omzxJ9Jf9Oe-fs9YgvsTiX=w53-h44'),
('Aiolos',    1000,10,10,'https://lh6.googleusercontent.com/yfGknvYcqq0cyVSQLZxW_Px3He9ncYc3u-Zljz_ucg67sgcqRWjFzQp80RqlNin-ghR6yyKkTthnDP3NInWmYnKlyd92GWLSFgz3VCGcYvRPmhj32RIi5MkbqIuR1xk5Rg5S5LVd=w53-h44'),
('Aldebaran', 1000,10,10,'https://lh6.googleusercontent.com/QdfrP0llYOVkbyxJo2O976SIVSdtPwu3M_yCMzUMz-oo3UPa45i69pUbN4ExCGWjAg-HewxODsQzV-caG1T_kWtzunExmWhotNzCGvE1PBENyhSOXVFJCcAfq-CU1wC6Sevn5KCR=w53-h44'),
('Aphrodite', 1000,10,10,'https://lh6.googleusercontent.com/k6r_ZO0nwDYQy1AyVJ04lEE69Q2slrRjo3MOT9iV_qWvMl5CcWoJono4dvG4P18OqT2bUVmjnN1V1dPAZhP9nw8PjSO-haie8gV86H-L67sk-MZiJymYCPpv1x4T38fyz7PmuVeg=w53-h44'),
('Camus',     1000,10,10,'https://lh3.googleusercontent.com/X-qAp7Q5AZRmVBvaZtHjivINjPgaxq4YIDDf1CuMxESQrmDNaPygoR69HXu4hATwKHUxHAO_XDJt7olgkchOkOBM08vBoyfuZwC-XlQi4MBzkgALkXSlS2JipXCUxlEdq56L8MWu=w53-h44'),
('Deathmask', 1000,10,10,'https://lh6.googleusercontent.com/UFxURVgeYYEDnTivtVFbj5vLddXKUyu1Qe2A8ALH7Mk5ILT49bl3bEDfzOFgTV-UOq7gF5kqhzelN2CAtG2LAU8u7NVGQR4YeqVkX983g7UrserKAZd6fwnbod9Jhnhjj-jRaK5r=w53-h44'),
('Dohko',     1000,10,10,'https://lh3.googleusercontent.com/HMICa1t8RjbAdb-5sHpSnbtLwhgQI-MtAcozp6Ujk0-asqHor1j_1_ZFhqaOcf8h91TlhSUxW_djUHSSgxgbeoLyKYtquCte6ykYSkAyHjAW11arivRtl0UokbFaP91sNpRHdBEm=w53-h44'),
('Grand Pope',1000,10,10,'https://lh4.googleusercontent.com/oxgHrGAkTGsyiohyvDMCZ0vmnQVkjAwFkpOM_eJLOQoFfem59Hn0ZrS58TqpqhrS4F0q5lzTdTuzL5-add3DmA2jQCDI0VqTcSlWlk_M9yqgM58lsFokandiwpuo23utLhWiFdVH=w53-h44'),
('Hyoga',     1000,10,10,'https://lh4.googleusercontent.com/yHdF9Yn_GDjJjMvLGU6MZdsHIsBC0gF7XtHGJtwuHZ-TBY-AJh3ktKghlognjJdGeJNUvuDzCVT4QNKJqvdgf56acz-XivYlsr8nk9Ol79YqS6DJEynUCYPP67wLcEh1-5pTgaBb=w53-h44'),
('Ikki',      1000,10,10,'https://lh5.googleusercontent.com/MYMIwXElez2RiBnVtqr1DydOEsz-dF8PzYKpI3NMG-4NGasDv3OGYNiDFGwOUUz33j61N8NQllk084lugjtwiWX4Xd95XivccTPUumWX4TD_cYNO006EvAw4QsxKNTZcQ82Uui1R=w53-h44'),
('Kanon',     1000,10,10,'https://lh4.googleusercontent.com/DqPfB5gkPsPyXQZJrJ_hwPc8ULIL_gNSTLzv0d2PukaWpuJiCeY03NLheTJ_bd5TlO9B5iJUxoYvlDDjtyO3PSNmGhEmh3OIAgvBRZLajaGmNoSrTSA42RVGJ0w3mrdE-DswUQL8=w53-h41'),
('Milo',      1000,10,10,'https://lh6.googleusercontent.com/HMO2r8GpgwPocYimaX3bsdxepWEIdUAsJwmtBLTC292JuPExKzSGyCnwS4SCSWiz74vrCitpjU-iAhGAG02SxhMjuQY639sZNno3NN8oG2fbN2OxYSZvzgTI1I9bozH313xld5y-=w53-h44'),
('Minos',     1000,10,10,'https://lh6.googleusercontent.com/_ui5k8DtIqlhv9gTx1-GA77Tk2tngSS480yn1ktzanvOg16q5ZljuB-kpAK0A8-8qb0vvSHUdoMTzwp8Y-L7cKfo4dKv8qVdNY7FI8mXOszWn1NFksQZ7PXCLJke3y_bwiZwJo_z=w53-h44'),
('Mu',        1000,10,10,'https://lh4.googleusercontent.com/1vVlmSfYSTu6zB6SBoQS9P4OFFSM-EGgWXCVlmx3Jd_hNWkha3Ql6Vis-djOzgvHR7L539Smp_S1jsyuuTBnGB0wtuaTIdzCaTga3BOnBPRf6YrXZsZ2aEor0Zs-dUf5DUJCoGWw=w53-h44'),
('Pandora',   1000,10,10,'https://lh6.googleusercontent.com/Roxid1liOdRNeJKD5Lm6Bp-tSlLsxsGZhfOfRCKVL_CUDcrgB7pZBeOJcc5HIWagb-PjwCJw2VaUrNGYmXpASbOAVuf0Jluq6xaC_esagh0q1xgmsjh83ma3g8BLFHeQOhC5Sgqc=w53-h44'),
('Radamenthe',1000,10,10,'https://lh4.googleusercontent.com/Yzv8LDelZhRi2OLoexaJ2upsASTPMnX2vzX2wUWYh-ZWPJvnBxXebSr71et4lEamLdcPhEEscFmdE7S2zV5wkkz4EZuEDSWGjQ_bNs3Xk0z2yA5W2IRyvgpj3pjtpRgGRiGe_za8=w53-h44'),
('Saga',      1000,10,10,'https://lh3.googleusercontent.com/1lv2Uhld2Bg_7kEHyENjPnHUV_XxJFbsG9XTmAn4EJyPuG0naGZJgMFZ6BbMByeJYcvhR50fwRQmlfoThjyiz0SdUXEuVEbub9SW4GwTsf7NJa8PIX-C2qLENv_CAMEPQYO9uHFs=w53-h44'),
('Saori',     1000,10,10,'https://lh6.googleusercontent.com/JUpUeTR849SgeXkTKlCz7yeLrghp7SDUvMEFyg-DNp1whgRDGLbvYtnm2Ff891raFxIJFvEeoyeCmECJBUgd6OuVWT5fvfS7-FQEDKMSLe09LdG7gK-PcjdcVNoNeSlb1GmX0IHa=w53-h41'),
('Seiya',     1000,10,10,'https://lh5.googleusercontent.com/ilmjwRWYLMW2-4ZNkMWTNqQMNSXnkDgArhkRYkUAkXeXUbHYcQI9zwkfkHR_EC_3YZGfufzleOX9h9V4ZawBFP1xN9Pt0SN-HhoFip85NYbKpEk8p8OJi9aLAaKfteEf3f-1xozr=w53-h44'),
('Shaka',     1000,10,10,'https://lh5.googleusercontent.com/r3cdLyhqE1hsi879JwGrq9VWKPVQfIe9HggTV_CgBWMIh0FPMNMQ3OC9KlbcuUIlVCx2pC_DGBF6APc3iFGZ5YNPuuvxa7__jeOJ-Z0i03WnsLohAw91vWLnua2VUeI54E-HIgRF=w53-h44'),
('Shion',     1000,10,10,'https://lh3.googleusercontent.com/IuFjm89ahoF1MI_ONpJEyuWxHle9ZJzBzg9jxYCwUV69A-vMcd0OGRXqiQLo4udF39AxeeK-5TK39gdooIbwJkPtR6vqS6A47adqV_5eVRi_Eg4l3qEucevDn45KSxTy7dpX3wPJ=w53-h44'),
('Shiryu',    1000,10,10,'https://lh5.googleusercontent.com/fvLxfnrusqqyn74-j5HyYkzl19SkJ_Qrdfn-Vu7JevTW2VXPDNrKAI8MlOXd4rF8CV23YD-_t8yT0TtcU828XrFdfsDRvateVQ1iF3ssGbIwXpmhP_KlDvSpB1MrwR-tE9XQkT2W=w53-h44'),
('Shun',      1000,10,10,'https://lh6.googleusercontent.com/pqnfVU7oUhil2kyl5EyAkUczZtSTAVpWYsJgBk8ZrISwxE4NVt4xqosE5tLJweXs8-jWp4B3spW6U_AWZBY-iVmu8upVy2CrF5Nfma0iTN99wo-FkyPtOnFEHoVv6ocCw00oZHzH=w53-h44'),
('Shura',     1000,10,10,'https://lh6.googleusercontent.com/pq5NLqOzf2Em-cKfhsQKu_CS8zdKFKTBGVtkOGOguJo8oIMosIwVl9M6YzAkpGCVOfZJZIcvf5vz5k5vuOYnb_j3z8M74koXL0lgZJWqWfg8qK7gQbJ6KD7uhdggcraAvXTw69eG=w53-h44'),
('Marin',     1000,10,10,'https://lh4.googleusercontent.com/bB2-agOLsrtmNPuACeakDYDijVwa9xPonZ6zL6Ee8GrxiFkWV_X0k6PwKjqqakFNtT-qXrI9YE00m34UyQXvwPYKGryb5mv7pdw-_UU-csNJRdEJ2Gw7ExUQGrujocdsjQPS4kWX=w53-h44'),
('Shaina',    1000,10,10,'https://lh6.googleusercontent.com/_Y5vyWtYnis7NfTiEsA1Fnku3SBWcWdOpNK50iduh2wYgkzC8wYRX3cOE2jm5qbffWWoHaMGt_BA5WBKV-vcJrKbHUxbAZCVEjojVm39otvOfXQrJ-N8ubM-ZFJQLVBnQ67XBnMu=w53-h44'),
('Cassios',   1000,10,10,'https://lh5.googleusercontent.com/tjaUyQt6VJjLWNEesM2v03HOpOvE9ILAhj6RytberTnXhiYvagM7Al33etRWIVOxooRAZb-U2jGyR3ifQetYoM1DIULvfkDeLH_kwFciZFvwDvXJ7aK2BBa01uVFCz0kLxwm0r_O=w53-h44'),
('Kiki',      1000,10,10,'https://lh5.googleusercontent.com/F2undn5QQ-YMLWNZQJrcOXVLYquHm57kPPRkVChzAB-1hD2LaliK4zQ5pTQB0zcAh-dfknL4Co3PBlmUeYARYsh4X6-0A96pLbiI71tT_QoQ2RQx-9OhpuwcKeHJaIdOLeD5HuHc=w53-h44');
