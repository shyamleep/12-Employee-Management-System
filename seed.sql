USE audubon_db;


INSERT INTO departments (id, dept) VALUES
(11, "Bird Friendly Communities"),
(12, "Network"),
(13, "Grassroots");

INSERT INTO roles (id, title, salary, department_id) VALUES
(101, "Partnerships Manager", 140000, 11),
(102, "Senior Director", 100000, 11),
(103, "Program Manager", 75000, 11),
(104, "Project Coordinator", 45000, 11),
(105, "Program Manager", 70000, 12),
(106, "Action Manager", 125000, 12),
(107, "Network VP", 270000, 12),
(108, "Program Manager", 90000, 13),
(109, "Outreach Associate", 65000, 13),
(110, "Action Manager", 75000, 13),
(111, "Senior Director", 115000, 13),
(112, "Grassroots VP", 170000, 13);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id, department_id) VALUES
(1001, "Northern", "Tinamou", 101, 1008, 11),
(1002, "Emperor", "Goose", 102, 1001, 11),
(1003, "Plain", "Chachalaca", 103, 1002, 11),
(1004, "Crested", "Guan", 103, 1002, 11),
(1005, "Banded", "Quail", 104, 1003, 11),
(1006, "Spruce", "Grouse", 104, 1002, 11),
(1007, "Rock", "Ptarmigan", 105, 1009, 12),
(1008, "Gray", "Partridge", 107, NULL, 12),
(1009, "Ocellated", "Turkey", 106, 1008, 12),
(1010, "Horned", "Grebe", 105, 1009, 12),
(1011, "Plumbeous", "Pigeon", 105, 1009, 12),
(1012, "Zenaida", "Dove", 112, 1008, 13),
(1013, "Pheasant", "Cuckoo", 111, 1012, 13),
(1014, "Lesser", "Roadrunner", 108, 1012, 13),
(1015, "Eared", "Poorwill", 109, 1014, 13),
(1016, "Dusky", "Nightjar", 110, 1013, 13),
(1017, "Chimney", "Swift", 109, 1013, 13),
(1018, "Great", "Potoo", 110, 1013, 13),
(1019, "Bronzy", "Hermit", 108, 1013, 13),
(1020, "Corn", "Crake", 110, 1012, 13),
(1021, "American", "Coot", 109, 1017, 13);