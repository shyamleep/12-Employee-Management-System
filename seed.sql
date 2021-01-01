USE audubon_db;

INSERT INTO departments (id, dept) VALUES
(1, "Bird Friendly Communities"),
(2, "Network"),
(3, "Grassroots");

INSERT INTO roles (id, title, salary, department_id) VALUES
(01, "Partnerships Manager", 140,000, 1),
(02, "Senior Director", 100,000, 1),
(03, "Program Manager", 75,000, 1),
(04, "Project Coordinator", 45,000, 1),
(05, "Program Manager", 70,000, 2),
(06, "Action Manager", 125,000, 2),
(07, "Network VP", 270,000, 2),
(08, "Program Manager", 90,000, 3),
(09, "Outreach Associate", 65000, 3),
(10, "Action Manager", 75,000, 3),
(11, "Senior Director", 115,000, 3),
(12, "Grassroots VP", 170,000, 3),

INSERT INTO employees (id, first_name, last_name, role_id, manager_id, department_id) VALUES
(001, "Northern", "Tinamou", 01, 008, 1),
(002, "Emperor", "Goose", 02, 001, 1),
(003, "Plain", "Chachalaca", 03, 002, 1),
(004, "Crested", "Guan", 03, 002, 1),
(005, "Banded", "Quail", 04, 003, 1),
(006, "Spruce", "Grouse", 04, 002, 1),
(007, "Rock", "Ptarmigan", 05, 009, 2),
(008, "Gray", "Partridge", 07, NULL, 2),
(009, "Ocellated", "Turkey", 06, 008, 2),
(010, "Horned", "Grebe", 05, 009, 2),
(011, "Plumbeous", "Pigeon", 05, 009, 2),
(012, "Zenaida", "Dove", 12, 008, 3),
(013, "Pheasant", "Cuckoo", 11, 012, 3),
(014, "Lesser", "Roadrunner", 08, 012, 3),
(015, "Eared", "Poorwill", 09, 014, 3),
(016, "Dusky", "Nightjar", 10, 013, 3),
(017, "Chimney", "Swift", 09, 013, 3),
(018, "Great", "Potoo", 10, 013, 3),
(019, "Bronzy", "Hermit", 08, 013, 3),
(020, "Corn", "Crake", 10, 012, 3)
(021, "American", "Coot", 09, 017, 3);